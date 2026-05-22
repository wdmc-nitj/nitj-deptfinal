import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "../../config/server";

function getRandomColor() {
  const colors = ["red", "blue", "green", "purple", "pink", "orange"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function ResearchProfile({ edit, data, faculty, token, onUpdate }) {
  const dept = useLocation().pathname.split("/")[2];
  const [interest, setInterest] = useState("");
  const [researchLink, setResearchLink] = useState("");
  const [researchIDs, setResearchIDs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const initialDataRef = useRef(null);

  // Initialize data only once when component mounts or when data changes significantly
  useEffect(() => {
    // Only update if data has actually changed
    if (data && JSON.stringify(initialDataRef.current) !== JSON.stringify(data)) {
      initialDataRef.current = data;
      setInterest(data["Research Interests"] || "");
      setResearchLink(data["Brief Research Profile"] || "");
      setResearchIDs(data["Research Id"] || []);
      setIsDataLoaded(true);
    }
  }, [data]);

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
    e.preventDefault();
    
    if (isSubmitting) {
      alert("⏳ Please wait, saving in progress...");
      return;
    }

    // Validate required fields
    if (!interest || interest.trim() === "") {
      alert("⚠️ Please enter Research Interests");
      return;
    }

    if (!researchLink || researchLink.trim() === "") {
      alert("⚠️ Please enter Brief Research Profile");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        "Research Interests": interest,
        "Brief Research Profile": researchLink,
        "Research Id": researchIDs,
      };

      console.log("Submitting payload:", payload);

      const response = await axios.put(
        `${SERVER_URL}/dept/${dept}/Faculty/${faculty._id}/${token}?q=research_profile`,
        payload
      );

      console.log("Response:", response.data);
      
      alert("✅ Research profile updated successfully!");
      
      // Update the initial data reference to match current state
      initialDataRef.current = {
        "Research Interests": interest,
        "Brief Research Profile": researchLink,
        "Research Id": researchIDs,
      };
      
      // Call onUpdate callback if provided
      if (onUpdate) {
        onUpdate();
      }
      
      // Optional: Don't reload, just keep editing
      // setTimeout(() => {
      //   window.location.reload();
      // }, 500);

    } catch (error) {
      console.error("Error submitting data:", error);
      
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data?.message || error.response.data;
        
        if (status === 401) {
          alert("🔒 Unauthorized! Please login again.");
        } else if (status === 404) {
          alert("❌ Server endpoint not found.");
        } else if (status === 500) {
          alert("🔥 Server error! Please try again later.");
        } else {
          alert(`❌ Error (${status}): ${message || "Something went wrong"}`);
        }
      } else if (error.request) {
        alert("🌐 Network error! Please check your internet connection.");
      } else {
        alert("❌ Some error occurred while updating research profile.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Available research platforms
  const researchPlatforms = ["VIDWAAN", "PUBLONS", "ORCID", "Scopus", "ResearchGate"];

  return (
    <div className="overflow-x-auto">
      {edit ? (
        <div className="m-4 flex justify-center items-center">
          <form className="w-full max-w-lg shadow p-3" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-sm font-bold mb-2"
                  htmlFor="research-interests"
                >
                  Research Interests
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 shadow-inner leading-tight focus:outline-none focus:border-gray-50"
                  id="research-interests"
                  onChange={(e) => setInterest(e.target.value)}
                  value={interest || ""}
                  placeholder="Enter your research interests (e.g., Machine Learning, Computer Vision, etc.)"
                  rows="3"
                />
              </div>
              
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-sm font-bold mb-2"
                  htmlFor="research-profile"
                >
                  Brief Research Profile
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-50 shadow-inner"
                  id="research-profile"
                  onChange={(e) => setResearchLink(e.target.value)}
                  value={researchLink || ""}
                  placeholder="Enter a brief description of your research profile"
                  rows="4"
                />
              </div>
              
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-sm font-bold mb-2"
                  htmlFor="research-ids"
                >
                  Research IDs
                </label>
                
                {researchPlatforms.map((platform) => (
                  <div key={platform} className="flex items-center mb-3">
                    <label className="inline-flex items-center mr-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                        checked={researchIDs.some((id) => id.title === platform)}
                        onChange={() => handleCheckboxChange(platform)}
                      />
                      <span className="ml-2 font-medium">{platform}</span>
                    </label>
                    <input
                      className="appearance-none block flex-1 bg-gray-200 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:border-gray-50 shadow-inner"
                      type="text"
                      placeholder={`Enter ${platform} profile URL`}
                      value={
                        researchIDs.find((id) => id.title === platform)?.link || ""
                      }
                      onChange={(e) => handleLinkChange(platform, e.target.value)}
                      disabled={!researchIDs.some((id) => id.title === platform)}
                    />
                  </div>
                ))}
                
                {researchIDs.length === 0 && (
                  <p className="text-gray-500 text-sm mt-2">
                    Select at least one research platform and provide your profile link
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex px-3 w-full justify-end gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 active:translate-y-[2px] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                  {isSubmitting ? "⏳ Saving..." : "Submit"}
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
                  <td className="align-top pr-4 pl-2 py-2">
                    {interest || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Brief Research Profile
                  </td>
                  <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                  <td className="align-top pr-4 pl-2 py-2">
                    {researchLink || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Research IDs
                  </td>
                  <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                  <td className="align-top pr-4 pl-2 py-2">
                    <div className="flex flex-wrap gap-2">
                      {researchIDs && researchIDs.length > 0 ? (
                        researchIDs.map((item, index) => (
                          <div
                            key={index}
                            className={`rounded-full py-1 px-3 text-white text-sm font-semibold cursor-pointer hover:opacity-80 transition-opacity`}
                            style={{
                              backgroundColor: getRandomColor(),
                              cursor: item.link ? "pointer" : "default",
                              opacity: item.link ? 1 : 0.6
                            }}
                            onClick={() => {
                              if (item.link) {
                                window.open(item.link, "_blank");
                              } else {
                                alert(`No link provided for ${item.title}`);
                              }
                            }}
                          >
                            {item.title}
                          </div>
                        ))
                      ) : (
                        <span className="text-gray-500">No research IDs added</span>
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