import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "../../config/server";

function Otherprofilelink({ edit, data, token }) {
  const dept = useLocation().pathname.split("/")[2];

  // PERSONAL LINKS ARRAY
  const [links, setLinks] = useState(
    data?.personal_link?.["Personal Link"] || [
      {
        title: "",
        link: "",
      },
    ]
  );

  // GOOGLE SCHOLAR
  const [googlelink, setGooglelink] = useState(
    data?.personal_link?.["Google Scholar Link"] || ""
  );

  // HANDLE PERSONAL LINK CHANGE
  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...links];

    updatedLinks[index][field] = value;

    setLinks(updatedLinks);
  };

  // ADD NEW LINK
  const addLink = () => {
    setLinks([
      ...links,
      {
        title: "",
        link: "",
      },
    ]);
  };

  // REMOVE LINK
  const removeLink = (index) => {
    const updatedLinks = links.filter(
      (_, i) => i !== index
    );

    setLinks(updatedLinks);
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // REMOVE EMPTY LINKS
      const cleanedLinks = links.filter(
        (item) =>
          item.title.trim() !== "" &&
          item.link.trim() !== ""
      );

const newRow = {
  "Personal Link": cleanedLinks,
  "Google Scholar Link": googlelink,
};

console.log(
  "Sending:",
  JSON.stringify(newRow, null, 2)
);

const response = await axios.put(
  `${SERVER_URL}/dept/${dept}/Faculty/${data._id}/${token}?q=personal_link`,
  newRow
);

      console.log(response.data);

      alert("✅ Links Updated Successfully");

      setTimeout(() => {
        window.location.reload();
      }, 500);

    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(
          `❌ Error (${error.response.status}): ${
            error.response.data?.message ||
            "Failed to update"
          }`
        );
      } else if (error.request) {
        alert(
          "🌐 Network Error! Please check internet connection."
        );
      } else {
        alert(
          `❌ ${error.message || "Something went wrong"}`
        );
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      {edit ? (
        <div className="m-4">
          <form
            className="w-full max-w-lg shadow-md border rounded p-3"
            onSubmit={handleSubmit}
          >

            {/* PERSONAL LINKS */}
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-sm font-bold mb-3">
                Personal Links
              </label>

              {links.map((item, index) => (
                <div
                  key={index}
                  className="border rounded p-3 mb-3"
                >

                  {/* TITLE */}
                  <input
                    type="text"
                    placeholder="Title"
                    value={item.title}
                    onChange={(e) =>
                      handleLinkChange(
                        index,
                        "title",
                        e.target.value
                      )
                    }
                    className="appearance-none bg-white py-2 px-3 mb-2 block border w-full rounded-md border-gray-300 shadow-sm"
                  />

                  {/* LINK */}
                  <input
                    type="text"
                    placeholder="https://..."
                    value={item.link}
                    onChange={(e) =>
                      handleLinkChange(
                        index,
                        "link",
                        e.target.value
                      )
                    }
                    className="appearance-none bg-white py-2 px-3 block border w-full rounded-md border-gray-300 shadow-sm"
                  />

                  {/* REMOVE BUTTON */}
                  <button
                    type="button"
                    onClick={() =>
                      removeLink(index)
                    }
                    className="mt-2 text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* ADD LINK BUTTON */}
              <button
                type="button"
                onClick={addLink}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                + Add Personal Link
              </button>
            </div>

            {/* GOOGLE SCHOLAR */}
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-sm font-bold mb-2">
                Google Scholar Link
              </label>

              <input
                type="text"
                value={googlelink}
                onChange={(e) =>
                  setGooglelink(e.target.value)
                }
                placeholder="https://scholar.google.com/..."
                className="appearance-none bg-white py-2 px-3 block border w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>

            {/* SUBMIT */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 active:translate-y-[2px] hover:shadow-xl"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                  Submit
                </span>
              </button>
            </div>

          </form>
        </div>
      ) : (
        <div className="overflow-x-auto relative my-2 scrollbar min-w-[570px]">
          <div className="flex max-w-full justify-between items-center p-4 shadow-md">

            <table className="text-sm sm:text-base">
              <tbody>

                {/* PERSONAL LINKS */}
                {links.length > 0 && (
                  <tr>
                    <td className="font-bold pr-4 pl-2 py-2">
                      Personal Links
                    </td>

                    <td className="font-bold pr-4 pl-2 py-2">
                      :
                    </td>

                    <td>
                      <div className="flex flex-wrap gap-2">
                        {links.map((item, index) => (
                          <span
                            key={index}
                            onClick={() =>
                              window.open(
                                item.link,
                                "_blank"
                              )
                            }
                            className="text-orange-500 hover:underline cursor-pointer"
                          >
                            {item.title}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}

                {/* GOOGLE SCHOLAR */}
                {googlelink && (
                  <tr>
                    <td className="font-bold pr-4 pl-2 py-2">
                      Google Scholar
                    </td>

                    <td className="font-bold pr-4 pl-2 py-2">
                      :
                    </td>

                    <td>
                      <span
                        onClick={() =>
                          window.open(
                            googlelink,
                            "_blank"
                          )
                        }
                        className="text-orange-500 hover:underline cursor-pointer break-all"
                      >
                        {googlelink}
                      </span>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>

          </div>
        </div>
      )}
    </div>
  );
}

export default Otherprofilelink;