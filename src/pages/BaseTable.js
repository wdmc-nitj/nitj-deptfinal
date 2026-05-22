import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "../config/server";

function BaseTable({
  edit,
  tablehead,
  data,
  Editfeild,
  HandleEdit,
  feild,
  isLogin,
  faculty,
  title,
  token,
}) {
  const [changedata, setChangedata] = useState({});
  const dept = useLocation().pathname.split("/")[2];
  const [row, setrow] = useState(8);
  const [asec, setAsec] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalrow = data.length;
  const totalPage = Math.ceil(totalrow / row);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Initialize form data based on edit mode
    if (Editfeild >= 0 && data[Editfeild]) {
      setChangedata({ ...data[Editfeild] });
    } else {
      // Initialize empty object for add mode
      const emptyObj = {};
      feild.forEach(f => emptyObj[f] = "");
      setChangedata(emptyObj);
    }
    setPage(1);
  }, [Editfeild, data, feild]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) {
      alert("⏳ Please wait, saving in progress...");
      return;
    }

    // Validation: Check if all fields are filled
    const missingFields = feild.filter(field => !changedata[field] || changedata[field].trim() === "");
    
    if (missingFields.length > 0) {
      alert(`Please fill in the following fields:\n${missingFields.join(", ")}`);
      return;
    }

    setIsSubmitting(true);

    let updatedData = [...data];

    if (Editfeild < 0) {
      // Add new entry
      updatedData.push(changedata);
    } else {
      // Edit existing entry
      updatedData[Editfeild] = changedata;
    }

    try {
      await axios.put(
        `${SERVER_URL}/dept/${dept}/Faculty/${faculty._id}/${token}?q=${title}`,
        updatedData
      );

      // Success alert
      if (Editfeild < 0) {
        alert("✅ Entry added successfully!");
      } else {
        alert("✅ Entry updated successfully!");
      }
      
      // Reload after a short delay so user can see the success message
      setTimeout(() => {
        window.location.reload();
      }, 500);

    } catch (error) {
      console.log(error);
      
      // Detailed error messages
      if (error.response) {
        // Server responded with error
        const status = error.response.status;
        const message = error.response.data?.message || error.response.data;
        
        if (status === 401) {
          alert("🔒 Unauthorized! Please login again.");
        } else if (status === 404) {
          alert("❌ Server endpoint not found. Please check configuration.");
        } else if (status === 500) {
          alert("🔥 Server error! Please try again later.");
        } else {
          alert(`❌ Error (${status}): ${message || "Something went wrong"}`);
        }
      } else if (error.request) {
        // Request was made but no response
        alert("🌐 Network error! Please check your internet connection.");
      } else {
        // Other errors
        alert(`❌ ${error.message || "An unexpected error occurred"}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (index) => {
    // Get item details for better confirmation message
    const itemToDelete = data[index];
    const itemIdentifier = itemToDelete?.Name || itemToDelete?.Title || `entry ${index + 1}`;
    
    if (!window.confirm(`⚠️ Are you sure you want to delete "${itemIdentifier}"?\n\nThis action cannot be undone!`)) {
      return;
    }
    
    const newRow = data.filter((val, ind) => ind !== index);
    try {
      await axios.put(
        `${SERVER_URL}/dept/${dept}/Faculty/${faculty._id}/${token}?q=${title}`,
        newRow
      );
      
      // Success alert for delete
      alert(`🗑️ "${itemIdentifier}" has been deleted successfully!`);
      
      setTimeout(() => {
        window.location.reload();
      }, 500);
      
    } catch (error) {
      console.log(error);
      
      // Detailed error for delete
      if (error.response) {
        alert(`❌ Failed to delete: ${error.response.data?.message || "Server error"}`);
      } else if (error.request) {
        alert("🌐 Network error! Please check your connection.");
      } else {
        alert("❌ An unexpected error occurred while deleting.");
      }
    }
  };

  const handleInputChange = (field, value) => {
    setChangedata(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div>
      {edit ? (
        <div className="mt-10 sm:mt-0 shadow-md border-2 rounded">
          <div className="">
            <div className="mt-5 md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="overflow-hidden sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      {feild?.map((item, i) => (
                        <div key={i} className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor={item}
                            className="block text-sm font-medium px-1"
                          >
                            {item}
                          </label>
                          <textarea
                            type="text"
                            name={item}
                            id={item}
                            value={changedata[item] || ""}
                            onChange={(e) => handleInputChange(item, e.target.value)}
                            className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"
                            rows="3"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex px-3 w-full justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => HandleEdit(-1)}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-400 to-gray-600 active:translate-y-[2px] hover:shadow-xl"
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                      Cancel
                    </span>
                  </button>
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
        <div className="flex flex-col items-center justify-between bg-white sm:rounded-lg w-full overflow-auto">
          <div className="flex w-[98%] items-center my-1 justify-between">
            <div className="flex items-center my-1 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 rounded">
              <label htmlFor="states" className="mr-2">
                Rows per Page :
              </label>
              <select
                id="states"
                value={row}
                onChange={(e) => setrow(Number(e.target.value))}
                className="border-none outline-none"
              >
                <option value={8}>8</option>
                <option value={20}>20</option>
                <option value={60}>60</option>
                <option value={100}>100</option>
              </select>
            </div>
            {isLogin && (
              <button
                onClick={() => HandleEdit(-1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:scale-95"
              >
                + Add New
              </button>
            )}
          </div>
          <div className="relative overflow-x-auto rounded w-full border">
            <table className="min-w-[800px] w-full text-sm text-left text-gray-800 scroll-auto">
              <thead className="text-gray-700 uppercase bg-gray-100 sm:shadow">
                <tr>
                  <th scope="col" className="px-6 py-3 border">S.No</th>
                  {tablehead.map((item, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="px-6 py-3 border cursor-pointer border-gray-300"
                      onClick={() => item === "Year" && setAsec(!asec)}
                    >
                      {item}
                      {item === "Year" && (
                        <span className="ml-2">
                          {asec ? "↑" : "↓"}
                        </span>
                      )}
                    </th>
                  ))}
                  <th
                    scope="col"
                    className={"px-6 py-3 border border-gray-300 " + (isLogin ? "" : "hidden")}
                  >
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...data]
                  ?.sort((b, c) => {
                    if (asec) {
                      return (b.Year || 0) - (c.Year || 0);
                    } else {
                      return (c.Year || 0) - (b.Year || 0);
                    }
                  })
                  ?.map((Item, i) => {
                    if (i >= row * (page - 1) && i < row * page) {
                      return (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="align-top px-6 py-4 text-gray-900 border-r">{i + 1}</td>
                          {feild.map((item, j) => (
                            <td
                              key={`${i}-${j}`}
                              className="align-top px-6 py-4 text-gray-900 border-r"
                            >
                              {item === "Link" ? (
                                <a 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  href={Item[item]}
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  <i className="fa-solid fa-link"></i> View Link
                                </a>
                              ) : (
                                <span className="break-words whitespace-pre-wrap">
                                  {Item[item] || "-"}
                                </span>
                              )}
                             </td>
                          ))}
                          {data.length > 0 && isLogin && (
                            <td className="text-blue-700 font-bold px-6 py-4">
                              <button
                                className="active:scale-[0.98] cursor-pointer text-blue-600 hover:text-blue-800 mr-3"
                                onClick={() => {
                                  HandleEdit(i);
                                }}
                              >
                                <i className="fa-solid fa-edit"></i> Edit
                              </button>
                              <button
                                className="active:scale-[0.98] cursor-pointer text-red-600 hover:text-red-800"
                                onClick={() => handleDelete(i)}
                              >
                                <i className="fa-solid fa-trash"></i> Delete
                              </button>
                             </td>
                          )}
                        </tr>
                      );
                    }
                    return null;
                  })}
              </tbody>
            </table>
            {data?.length === 0 && (
              <div className="w-full px-6 py-8 text-center border border-t-0">
                <p className="text-gray-500 text-lg">No data available</p>
                {isLogin && (
                  <button
                    onClick={() => HandleEdit(-1)}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:scale-95"
                  >
                    + Add Your First Entry
                  </button>
                )}
              </div>
            )}
            {data?.length > 0 && (
              <div className="w-full min-w-[800px] my-4 px-2 flex flex-1 items-center justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing
                    <span className="font-medium mx-1">
                      {row * (page - 1) + 1}
                    </span>
                    to
                    <span className="font-medium mx-1">
                      {Math.min(row * page, totalrow)}
                    </span>
                    of
                    <span className="font-medium mx-1">{totalrow}</span>
                    results
                  </p>
                </div>
                <div>
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    <button
                      type="button"
                      onClick={() => setPage(page > 1 ? page - 1 : 1)}
                      disabled={page === 1}
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="sr-only">Previous</span>
                      <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    
                    <span className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-indigo-600">
                      {page}
                    </span>
                    
                    {totalPage > page && (
                      <>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300">
                          ...
                        </span>
                        <span className="relative inline-flex items-center bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-300">
                          {totalPage}
                        </span>
                      </>
                    )}
                    
                    <button
                      type="button"
                      onClick={() => setPage(page < totalPage ? page + 1 : totalPage)}
                      disabled={page === totalPage}
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="sr-only">Next</span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default BaseTable;