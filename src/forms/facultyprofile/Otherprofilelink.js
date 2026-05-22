import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "../../config/server";

function Otherprofilelink({ edit, data, token, onUpdate }) {
  const dept = useLocation().pathname.split("/")[2];
  const [personalLink, setPersonalLink] = useState("");
  const [googleLink, setGoogleLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize data when component mounts or data changes
  useEffect(() => {
    if (data && data.personal_link) {
      // Check if personal_link is an object or string
      if (typeof data.personal_link === 'object') {
        setPersonalLink(data.personal_link["Personal Link"] || "");
      } else {
        setPersonalLink(data.personal_link || "");
      }
      setGoogleLink(data.personal_link?.["Google Scholar Link"] || "");
    } else if (data) {
      setPersonalLink("");
      setGoogleLink("");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) {
      alert("⏳ Please wait, saving in progress...");
      return;
    }

    // Validate at least one link is provided
    if (!personalLink && !googleLink) {
      alert("⚠️ Please provide at least one link (Personal or Google Scholar)");
      return;
    }

    setIsSubmitting(true);

    // Prepare data in the correct format
    const newRow = {
      "Personal Link": personalLink,
      "Google Scholar Link": googleLink
    };

    try {
      await axios.put(
        `${SERVER_URL}/dept/${dept}/Faculty/${data._id}/${token}?q=personal_link`,
        newRow
      );

      alert("✅ Links updated successfully!");
      
      if (onUpdate) {
        onUpdate();
      }
      
      setTimeout(() => {
        window.location.reload();
      }, 500);

    } catch (error) {
      console.error("Error updating links:", error);
      
      if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          alert("🔒 Unauthorized! Please login again.");
        } else if (status === 404) {
          alert("❌ Server endpoint not found.");
        } else if (status === 500) {
          alert("🔥 Server error! Please try again later.");
        } else {
          alert(`❌ Error: ${error.response.data?.message || "Something went wrong"}`);
        }
      } else if (error.request) {
        alert("🌐 Network error! Please check your internet connection.");
      } else {
        alert("❌ Some error occurred while updating links.");
      }
    } finally {
      setIsSubmitting(false);
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
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-sm font-bold mb-2"
                  htmlFor="personal-link"
                >
                  Personal Link
                </label>
                <textarea
                  id="personal-link"
                  name="Personal Link"
                  className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"
                  onChange={(e) => setPersonalLink(e.target.value)}
                  value={personalLink}
                  placeholder="Enter your personal website/portfolio URL"
                  rows="2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Example: https://yourportfolio.com
                </p>
              </div>
              
              <div className="w-full px-3 mt-4">
                <label
                  className="block uppercase tracking-wide text-sm font-bold mb-2"
                  htmlFor="google-scholar"
                >
                  Google Scholar Link
                </label>
                <textarea
                  id="google-scholar"
                  name="Google Scholar Link"
                  className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"
                  onChange={(e) => setGoogleLink(e.target.value)}
                  value={googleLink}
                  placeholder="Enter your Google Scholar profile URL"
                  rows="2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Example: https://scholar.google.com/citations?user=xxxxx
                </p>
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
        <div className="overflow-x-auto relative my-2 scrollbar min-w-[570px]">
          <div className="flex max-w-full justify-between items-center p-4 shadow-md">
            <table className="text-sm sm:text-base">
              <tbody>
                {personalLink && personalLink.length > 0 && (
                  <tr>
                    <td className="font-bold pr-4 pl-2 py-2 align-top">
                      Personal Link
                    </td>
                    <td className="text-sm font-bold pr-4 pl-2 py-2 align-top">
                      :
                    </td>
                    <td className="align-top">
                      <div
                        onClick={() => {
                          window.open(personalLink, "_blank");
                        }}
                        className="text-orange-400 hover:underline cursor-pointer"
                      >
                        {personalLink.length > 50 
                          ? personalLink.substring(0, 50) + "..." 
                          : personalLink}
                      </div>
                    </td>
                  </tr>
                )}

                {googleLink && googleLink.length > 0 && (
                  <tr>
                    <td className="font-bold pr-4 pl-2 py-2 align-top">
                      Google Scholar Link
                    </td>
                    <td className="text-sm font-bold pr-4 pl-2 py-2 align-top">
                      :
                    </td>
                    <td className="align-top">
                      <div
                        onClick={() => {
                          window.open(googleLink, "_blank");
                        }}
                        className="text-orange-400 hover:underline cursor-pointer"
                      >
                        {data?.name || "Google Scholar Profile"}
                      </div>
                    </td>
                  </tr>
                )}

                {(!personalLink || personalLink.length === 0) && 
                 (!googleLink || googleLink.length === 0) && (
                  <tr>
                    <td className="font-bold pr-4 pl-2 py-2 text-gray-500">
                      No links available
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