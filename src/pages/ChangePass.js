import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Error from "./Errorpage";
import { SERVER_URL } from '../config/server';
function ChangePass() {
  let url = useLocation();
  const status = url.pathname.split("/")[5];
  const { data, loading, error, reFetch } = useFetch(url.pathname);
  const dept = url.pathname.split("/")[2];
  const token = url.pathname.split("/")[4];

  return (
    <>
      {!loading ? (
        data?.isValid ? (
          <section className="bg-blue-50 w-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <i className="fa-solid fa-user mr-4"></i>
                Faculty Login
              </span>
              <div className="w-full rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Change Password
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                    action={`${SERVER_URL}/dept/${dept}/confirmation/submit/${token}`}
                    method="POST"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Enter New Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="border shadow-inner outline-none p-2.5 w-full focus:ring-blue-500"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="repassword"
                        className="border shadow-inner outline-none p-2.5 w-full focus:ring-blue-500"
                        placeholder=""
                        required=""
                      />
                    </div>
                    {status && status === 'passwordMismatch' && <div>Both passwords should match</div>}
                    <button
                      type="submit"
                      className="w-[80%] block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none shadow font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <Error />
        )
      ) : (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          Please wait while we load data for you....
        </div>
      )}
    </>
  );
}

export default ChangePass;
