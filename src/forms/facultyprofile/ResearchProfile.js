import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "../../config/server";

function getRandomColor() {
  const colors = ["red", "blue", "green", "yellow"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function ResearchProfile({ edit, data, faculty, token }) {
  const dept = useLocation().pathname.split("/")[2];
  const [interest, setInterest] = useState(
    data ? data["Research Interests"] : ""
  );
  const [researchLink, setResearchLink] = useState(
    data ? data["Brief Research Profile"] : ""
  );
  const [researchIDs, setResearchIDs] = useState(
    data && data["Research Id"] ? data["Research Id"] : []
  );
  // Below is for testing comment above one and uncomment below to test with placeholders
  // const [researchIDs, setResearchIDs] = useState([
  //   {
  //     title: "VIDWAAN",
  //     link: "https://nitj.ac.in",
  //   },
  //   {
  //     title: "PUBLONS",
  //     link: "https://nitj.ac.in",
  //   },
  // ]);

  const handleCheckboxChange = (platform) => {
    const isSelected = researchIDs.some((id) => id.title === platform);
    if (isSelected) {
      setResearchIDs(researchIDs.filter((id) => id.title !== platform));
    } else {
      setResearchIDs([...researchIDs, { title: platform, link: "" }]);
    }
  };

  const handleLinkChange = (title, link) => {
    setResearchIDs(
      researchIDs.map((id) => {
        if (id.title === title) {
          return { ...id, link: link };
        }
        return id;
      })
    );
  };

  const handleSubmit = async (e) => {
    try {
      await axios.put(
        `${SERVER_URL}/dept/${dept}/Faculty/${faculty._id}/${token}?q=research_profile`,
        {
          "Research Interests": interest,
          "Brief Research Profile": researchLink,
          "Research Id": researchIDs,
        }
      );
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      {edit ? (
        <div className="m-4 flex justify-center items-center">
          <form className="w-full max-w-lg shadow p-3" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-sm font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Research Interests
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 shadow-inner leading-tight focus:outline-none focus:border-gray-50"
                  name="Research Interests"
                  onChange={(e) => setInterest(e.target.value)}
                  id="title"
                  type="text"
                  placeholder="Title"
                  value={interest}
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-sm font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Profile Link
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-50 shadow-inner"
                  name="Brief Research Profile"
                  onChange={(e) => setResearchLink(e.target.value)}
                  value={researchLink}
                  id="link"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-sm font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Research IDs
                </label>
                <div className="flex">
                  <label className="inline-flex mt-3 mr-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                      checked={researchIDs.some((id) => id.title === "VIDWAAN")}
                      onChange={() => handleCheckboxChange("VIDWAAN")}
                    />
                    <span className="ml-2">VIDWAAN</span>
                  </label>
                  <input
                    className="appearance-none block w-1/2 bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-50 shadow-inner"
                    type="text"
                    placeholder="Link"
                    value={
                      researchIDs.find((id) => id.title === "VIDWAAN")?.link ||
                      ""
                    }
                    onChange={(e) =>
                      handleLinkChange("VIDWAAN", e.target.value)
                    }
                  />
                </div>
                <div className="flex ">
                  <label className="inline-flex mt-3 mr-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                      checked={researchIDs.some((id) => id.title === "PUBLONS")}
                      onChange={() => handleCheckboxChange("PUBLONS")}
                    />
                    <span className="ml-2">PUBLONS</span>
                  </label>
                  <input
                    className="appearance-none block w-1/2 bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-50 shadow-inner"
                    type="text"
                    placeholder="Link"
                    value={
                      researchIDs.find((id) => id.title === "PUBLONS")?.link ||
                      ""
                    }
                    onChange={(e) =>
                      handleLinkChange("PUBLONS", e.target.value)
                    }
                  />
                </div>
                {/* Add similar blocks for other research IDs */}
              </div>
            </div>
            <div className="flex px-3 w-full justify-end">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 active:translate-y-[2px] hover:shadow-xl">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="overflow-x-auto relative my-2 min-w-[570px] scrollbar">
          <div className="flex max-w-full justify-between items-center p-4 shadow-md">
            <table className="text-sm sm:text-base">
              <tbody>
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Research Interests
                  </td>
                  <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                  <td className="align-top pr-4 pl-2 py-2">{interest}</td>
                </tr>
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Brief Research Profile
                  </td>
                  <td className="align-top text-sm font-bold pr-4 pl-2 py-2">
                    :
                  </td>
                  <td className="align-top pr-4 pl-2 py-2">{researchLink}</td>
                </tr>
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Research IDs
                  </td>
                  <td className="align-top text-sm font-bold pr-4 pl-2 py-2">
                    :
                  </td>
                  <td className="align-top pr-4 pl-2 py-2">
                    <div className="flex">
                      {researchIDs.map((item, index) => (
                        <div
                          key={index}
                          className={`rounded-full mx-2 py-1 px-3 text-white text-sm font-semibold bg-${getRandomColor()}-500`}
                          onClick={() =>
                            window.open(item.link ? item.link : "", "_blank")
                          }
                          style={{ cursor: "pointer" }}
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResearchProfile;
