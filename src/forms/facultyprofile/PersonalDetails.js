import React, { useEffect, useState } from "react";
import { SERVER_URL, departments } from "../../config/server";
import { useLocation } from "react-router-dom";
import axios from "axios";

function PersonalDetails({ edit, data, token, onUpdate }) {
  const tablehead = [
    "Name",
    "Designation",
    "Department",
    "Qualification",
    "Address",
    "Phone",
    "Email ID",
  ];
  const feild = [
    "name",
    "designation",
    "department",
    "education_qualification",
  ];
  const qualificationMapping = {
    Column: "column",
    College: "clg",
    Degree: "degree",
    field: "field",
    Year: "year",
  };

  const [education, setEducation] = useState([]);
  const [editAddress, setEditAddress] = useState({});
  const [editImg, setEditImg] = useState("");
  const dept = useLocation().pathname.split("/")[2];
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const address = ["address", "city", "state", "pin"];

  // Initialize data when component mounts or data changes
  useEffect(() => {
    if (data) {
      setEducation(data.education_qualification || []);
      setEditAddress(data.correspondence_address || {});
      setEditImg(data.img || "");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) {
      alert("⏳ Please wait, saving in progress...");
      return;
    }

    // Validate required fields
    if (!editAddress?.phone) {
      alert("❌ Please enter phone number");
      return;
    }

    if (!editImg) {
      alert("❌ Please add an image URL");
      return;
    }

    if (!education || education.length === 0) {
      alert("❌ Please add at least one education qualification");
      return;
    }

    setIsSubmitting(true);

    let newData = {
      correspondence_address: editAddress,
      img: editImg,
      education_qualification: education,
    };

    try {
      const response = await axios.put(
        `${SERVER_URL}/dept/${dept}/Faculty/${data._id}/${token}/personalDetails`,
        newData
      );

      alert("✅ Personal details updated successfully!");
      
      // Call the onUpdate callback if provided
      if (onUpdate) {
        onUpdate();
      }
      
      // Optional: reload after short delay
      setTimeout(() => {
        window.location.reload();
      }, 500);

    } catch (error) {
      console.error("Error updating personal details:", error);
      
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
        alert("❌ Some error occurred. Please use Chrome browser to edit details.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEducationChange = (index, field, value) => {
    setEducation(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleDeleteEducation = (index) => {
    const itemToDelete = education[index];
    const degreeName = itemToDelete?.degree || `entry ${index + 1}`;
    
    if (window.confirm(`⚠️ Are you sure you want to delete "${degreeName}" qualification?`)) {
      setEducation(prev => prev.filter((_, i) => i !== index));
    }
  };

  const handleAddEducation = () => {
    setEducation(prev => [
      ...prev,
      {
        column: "",
        clg: "",
        degree: "",
        field: "",
        year: "",
      },
    ]);
  };

  const handleImageUpload = async () => {
    if (!image) {
      alert("⚠️ Please select an image file first");
      return;
    }

    try {
      let image_form = new FormData();
      image_form.append('file', image, image.name);

      const response = await axios.post(
        `${SERVER_URL}/dept/${dept}/upload/${token}`, 
        image_form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
      
      setEditImg(response.data.link);
      alert("✅ Image uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("❌ Failed to upload image. Please try again.");
    }
  };

  return (
    <div className="overflow-x-auto">
      {edit ? (
        <div className="mt-10 sm:mt-0 shadow-md border-2 rounded">
          <div className="">
            <div className="mt-5 md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="overflow-hidden sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    
                    {/* Education Qualification Section */}
                    <div className="block font-bold text-lg mb-4">Education Qualification</div>
                    <div className="flex flex-col gap-6">
                      {education.map((ed, index) => {
                        return (
                          <div className="flex gap-2 items-start" key={index}>
                            {Object.keys(qualificationMapping).map((feild, id) => {
                              const fieldKey = qualificationMapping[feild];
                              return (
                                <div key={id} className="col-span-6 sm:col-span-3 flex-1">
                                  <label
                                    htmlFor={fieldKey}
                                    className="block uppercase text-sm font-medium px-1"
                                  >
                                    {feild}
                                  </label>
                                  <input
                                    type="text"
                                    onChange={(e) => handleEducationChange(index, fieldKey, e.target.value)}
                                    name={fieldKey}
                                    className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"
                                    value={ed[fieldKey] || ""}
                                  />
                                </div>
                              );
                            })}
                            <button
                              type="button"
                              className="bg-red-600 flex justify-center items-center mt-6 text-white text-base duration-500 w-20 py-2 px-3 text-center shadow-md border border-red-300 rounded hover:-translate-y-1 hover:scale-110"
                              onClick={() => handleDeleteEducation(index)}
                            >
                              Delete
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    
                    <button
                      type="button"
                      className="bg-[#0054A6] mt-4 text-white text-base duration-500 w-24 py-2 px-3 text-center shadow-md border border-[#FFD66E] rounded hover:-translate-y-1 hover:scale-110"
                      onClick={handleAddEducation}
                    >
                      + Add
                    </button>

                    {/* Address Section */}
                    <div className="block font-bold text-lg mt-6 mb-4">Address</div>
                    <div className="grid grid-cols-6 gap-6">
                      {address?.map((item, i) => {
                        return (
                          <div key={i} className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor={item}
                              className="block uppercase text-sm font-medium px-1"
                            >
                              {item}
                            </label>
                            <textarea
                              type="text"
                              onChange={(e) => {
                                setEditAddress((prev) => {
                                  return { ...prev, [item]: e.target.value };
                                });
                              }}
                              name={item}
                              value={editAddress[item] || ""}
                              className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Image and Phone Section */}
                    <div className="grid grid-cols-6 gap-6 mt-4">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="img"
                          className="block uppercase text-sm font-medium px-1"
                        >
                          Image URL
                        </label>
                        <input
                          type="text"
                          name="img"
                          onChange={(e) => {
                            setEditImg(e.target.value);
                          }}
                          value={editImg || ""}
                          className="appearance-none py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"
                        />
                        <div className="flex justify-around p-4">
                          <input 
                            type="file" 
                            onChange={(e) => {
                              setImage(e.target.files[0]);
                            }}
                            accept="image/*"
                          />
                          <button 
                            type="button" 
                            className="bg-[#0054A6] text-white text-base duration-500 w-28 py-2 px-3 text-center shadow-md border border-[#FFD66E] rounded hover:-translate-y-1 hover:scale-110" 
                            onClick={handleImageUpload}
                          >
                            Generate Link
                          </button>
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="Phone"
                          className="block uppercase text-sm font-medium px-1"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="Phone"
                          onChange={(e) => {
                            setEditAddress((prev) => {
                              return { ...prev, phone: e.target.value };
                            });
                          }}
                          value={editAddress?.phone || ""}
                          className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"
                        />
                      </div>
                    </div>
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
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto relative my-2 scrollbar min-w-[500px]">
          <div className="flex max-w-full justify-between items-center text-sm sm:text-base p-2 sm:p-4 shadow-md">
            <table className="min-w-full">
              <tbody>
                {feild.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="w-48 align-top font-bold pr-4 pl-2 py-2 text-sm sm:text-base">
                        {tablehead[i]}
                      </td>
                      <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                      <td className="align-top pr-4 pl-2 py-2 w-full text-sm sm:text-base">
                        {item === "education_qualification" ? (
                          <div>
                            {data[item]?.map((Item, j) => {
                              return (
                                Item["degree"] && (
                                  <div key={j}>
                                    <span className="font-semibold mx-1">
                                      {Item["degree"]}
                                    </span>
                                    <span className="mx-1">
                                      {Item["field"]}
                                    </span>
                                    <span>({Item["clg"]})</span>
                                    {Item["year"] && <span> - {Item["year"]}</span>}
                                  </div>
                                )
                              );
                            })}
                          </div>
                        ) : item === "department" ? (
                          departments[dept] || data[item]
                        ) : (
                          data[item] || "-"
                        )}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Address
                  </td>
                  <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                  <td className="align-top pr-4 pl-2 py-2">
                    {editAddress && [
                      editAddress.address,
                      editAddress.city,
                      editAddress.state,
                      editAddress.pin
                    ].filter(Boolean).join(", ") || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Email
                  </td>
                  <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                  <td className="align-top pr-4 pl-2 py-2">{data["email"] || "-"}</td>
                </tr>
                <tr>
                  <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                    Phone
                  </td>
                  <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                  <td className="align-top pr-4 pl-2 py-2">
                    {editAddress?.phone || "-"}
                  </td>
                </tr>
                {/* {editImg && (
                  <tr>
                    <td className="w-48 align-top font-bold pr-4 pl-2 py-2">
                      Image
                    </td>
                    <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                    <td className="align-top pr-4 pl-2 py-2">
                      <img src={editImg} alt="Profile" className="w-32 h-32 object-cover rounded" />
                    </td>
                  </tr>
                )} */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalDetails;