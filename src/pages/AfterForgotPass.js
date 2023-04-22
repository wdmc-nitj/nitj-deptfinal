import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SERVER_URL } from '../config/server';
function AfterForgotPass() {
  const url = useLocation();
  const dept = url.pathname.split("/")[2];
  const status = url.pathname.split("/")[4];
  //console.log(status);

  return (
    <div className="w-full bg-blue-50/60 md:h-screen">
      <div className="flex justify-center mt-24">
        <div className="w-full max-w-md flex">
          <div className="w-full shadow-lg border p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-center">
              <h3 className="pt-4 mb-2 font-semibold text-2xl">
                Forgot Your Password?
              </h3>
              <p className="mb-4 text-sm text-gray-700">
                We get it, stuff happens. Just enter your email address below
                and we'll send you a link to reset your password!
              </p>
            </div>
            <form
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              method="post"
              action={`${SERVER_URL}/dept/${dept}/confirmation`}
            >
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-3 text-sm bg-blue-50 leading-tight text-gray-700 border rounded shadow-inner appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Email Address..."
                />
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Reset Password
                </button>
              </div>
              {status && status == "success" && <p>Email sent!</p>}
              {status && status == "failure" && (
                <p>Email not valid for selected profile!</p>
              )}
              <hr className="mb-6 border-t" />
              {/* <div className="text-center">
                <Link to={{ pathname: `/dept/${dept}/Login` }}>
                  <span className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                    Already have an account? Login!
                  </span>
                </Link>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterForgotPass;
