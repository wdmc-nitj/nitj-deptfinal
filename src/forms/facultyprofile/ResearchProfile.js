import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "../../config/server";

// COLOR CLASSES
const colorClasses = {
  VIDWAAN: "bg-red-500",
  PUBLONS: "bg-blue-500",
  ORCID: "bg-green-600",
  Scopus: "bg-orange-500",
  ResearchGate: "bg-cyan-600",
};

// RESEARCH PLATFORMS
const researchPlatforms = [
  "VIDWAAN",
  "PUBLONS",
  "ORCID",
  "Scopus",
  "ResearchGate",
];

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

  // HANDLE CHECKBOX
  const handleCheckboxChange = (platform) => {
    const isSelected = researchIDs.some(
      (id) => id.title === platform
    );

    if (isSelected) {
      setResearchIDs(
        researchIDs.filter(
          (id) => id.title !== platform
        )
      );
    } else {
      setResearchIDs([
        ...researchIDs,
        {
          title: platform,
          link: "",
        },
      ]);
    }
  };

  // HANDLE LINK CHANGE
  const handleLinkChange = (title, link) => {
    setResearchIDs(
      researchIDs.map((id) => {
        if (id.title === title) {
          return {
            ...id,
            link: link,
          };
        }

        return id;
      })
    );
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${SERVER_URL}/dept/${dept}/Faculty/${faculty._id}/${token}?q=research_profile`,
        {
          "Research Interests": interest,
          "Brief Research Profile": researchLink,
          "Research Id": researchIDs,
        }
      );

      console.log(
        "Research Profile Updated:",
        response.data
      );

      alert(
        "Research Profile Updated Successfully ✅"
      );
    } catch (error) {
      console.error(
        "Error submitting data:",
        error
      );

      alert(
        "Failed to Update Research Profile ❌"
      );
    }
  };

  return (
    <div className="overflow-x-auto">
      {edit ? (
        <div className="m-4 flex justify-center items-center">
          <form
            className="w-full max-w-lg shadow p-3"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap -mx-3 mb-6">

              {/* RESEARCH INTERESTS */}
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-sm font-bold mb-2">
                  Research Interests
                </label>

                <textarea
                  className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 shadow-inner leading-tight focus:outline-none"
                  name="Research Interests"
                  onChange={(e) =>
                    setInterest(e.target.value)
                  }
                  value={interest}
                  placeholder="Research Interests"
                />
              </div>

              {/* BRIEF RESEARCH PROFILE */}
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-sm font-bold mb-2">
                  Brief Research Profile
                </label>

                <textarea
                  className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-inner"
                  name="Brief Research Profile"
                  onChange={(e) =>
                    setResearchLink(e.target.value)
                  }
                  value={researchLink}
                  placeholder="Brief Research Profile"
                />
              </div>

              {/* RESEARCH IDS */}
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-sm font-bold mb-2">
                  Research IDs
                </label>

                {researchPlatforms.map((platform) => (
                  <div
                    key={platform}
                    className="flex items-center gap-3 mb-3"
                  >
                    <label className="inline-flex items-center min-w-[150px]">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                        checked={researchIDs.some(
                          (id) =>
                            id.title === platform
                        )}
                        onChange={() =>
                          handleCheckboxChange(
                            platform
                          )
                        }
                      />

                      <span className="ml-2">
                        {platform}
                      </span>
                    </label>

                    <input
                      className="appearance-none block flex-1 bg-gray-200 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none shadow-inner"
                      type="text"
                      placeholder={`${platform} Link`}
                      value={
                        researchIDs.find(
                          (id) =>
                            id.title === platform
                        )?.link || ""
                      }
                      onChange={(e) =>
                        handleLinkChange(
                          platform,
                          e.target.value
                        )
                      }
                    />
                  </div>
                ))}
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
        <div className="overflow-x-auto relative my-2 min-w-[570px] scrollbar">
          <div className="flex max-w-full justify-between items-center p-4 shadow-md">
            <table className="text-sm sm:text-base">
              <tbody>

                {/* RESEARCH INTERESTS */}
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Research Interests
                  </td>

                  <td className="align-top font-bold pr-4 pl-2 py-2">
                    :
                  </td>

                  <td className="align-top pr-4 pl-2 py-2">
                    {interest}
                  </td>
                </tr>

                {/* BRIEF PROFILE */}
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Brief Research Profile
                  </td>

                  <td className="align-top font-bold pr-4 pl-2 py-2">
                    :
                  </td>

                  <td className="align-top pr-4 pl-2 py-2">
                    {researchLink}
                  </td>
                </tr>

                {/* RESEARCH IDS */}
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Research IDs
                  </td>

                  <td className="align-top font-bold pr-4 pl-2 py-2">
                    :
                  </td>

                  <td className="align-top pr-4 pl-2 py-2">
                    <div className="flex flex-wrap">
                      {researchIDs.map(
                        (item, index) => (
                          <div
                            key={index}
                            className={`rounded-full mx-2 my-1 py-1 px-3 text-white text-sm font-semibold cursor-pointer ${
                              colorClasses[
                                item.title
                              ] || "bg-gray-500"
                            }`}
                            onClick={() => {
                              if (item.link) {
                                window.open(
                                  item.link,
                                  "_blank"
                                );
                              }
                            }}
                          >
                            {item.title}
                          </div>
                        )
                      )}
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