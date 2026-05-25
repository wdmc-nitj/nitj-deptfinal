import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "../../config/server";

function Otherprofilelink({ edit, data, token }) {
  const dept = useLocation().pathname.split("/")[2];

  const [link, setLink] = useState(
    data?.personal_link?.["Personal Link"] || ""
  );

  const [googlelink, setGooglelink] = useState(
    data?.personal_link?.["Google Scholar Link"] || ""
  );

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // CLEAN DATA
      const newRow = {
        "Personal Link": link,
        "Google Scholar Link": googlelink,
      };

      console.log("Sending:", newRow);

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
            <div className="flex flex-wrap -mx-3 mb-6">

              {/* PERSONAL LINK */}
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-sm font-bold mb-2">
                  Personal Link
                </label>

                <textarea
                  rows="3"
                  name="Personal Link"
                  className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"
                  onChange={(e) =>
                    setLink(e.target.value)
                  }
                  value={link}
                  placeholder="Enter Personal Website Link"
                />
              </div>

              {/* GOOGLE SCHOLAR */}
              <div className="w-full px-3 mt-4">
                <label className="block uppercase tracking-wide text-sm font-bold mb-2">
                  Google Scholar Link
                </label>

                <textarea
                  rows="3"
                  name="Google Scholar Link"
                  className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"
                  onChange={(e) =>
                    setGooglelink(e.target.value)
                  }
                  value={googlelink}
                  placeholder="Enter Google Scholar Link"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex px-3 w-full justify-end">
              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 active:translate-y-[2px] hover:shadow-xl"
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

                {/* PERSONAL LINK */}
                {link && (
                  <tr>
                    <td className="font-bold pr-4 pl-2 py-2">
                      Personal Link
                    </td>

                    <td className="text-sm font-bold pr-4 pl-2 py-2">
                      :
                    </td>

                    <td>
                      <div
                        onClick={() =>
                          window.open(link, "_blank")
                        }
                        className="text-orange-400 hover:underline cursor-pointer break-all"
                      >
                        {link}
                      </div>
                    </td>
                  </tr>
                )}

                {/* GOOGLE SCHOLAR */}
                {googlelink && (
                  <tr>
                    <td className="font-bold pr-4 pl-2 py-2">
                      Google Scholar Link
                    </td>

                    <td className="text-sm font-bold pr-4 pl-2 py-2">
                      :
                    </td>

                    <td>
                      <div
                        onClick={() =>
                          window.open(
                            googlelink,
                            "_blank"
                          )
                        }
                        className="text-orange-400 hover:underline cursor-pointer break-all"
                      >
                        {googlelink}
                      </div>
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