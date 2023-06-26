import React, {useRef, useState} from "react";
import { useLocation, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { SERVER_URL } from '../config/server';

function ChangePass() {
  let url = useLocation();
  // const status = url.pathname.split("/")[5];
  const { data, loading } = useFetch(url.pathname);
  const dept = url.pathname.split("/")[2];
  const token = url.pathname.split("/")[4];

  var password = useRef();
  var repassword = useRef();
  var [message, setMessage] = useState("");
  var [passwordStatus, setpasswordStatus] = useState(false);

  var checkData = (e) => {
    if(password.current.value.length<6 || password.current.value.length<6){
      if(passwordStatus) setpasswordStatus(false);
      setMessage("Password should be minimum 6 characters long.");
    }
    else if(password.current.value!==repassword.current.value){
      if(passwordStatus) setpasswordStatus(false);
      setMessage("Passwords should match");
    }
    else{
      setpasswordStatus(true);
      setMessage("All good!");
    }
  }

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
                    onChange={checkData}
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
                        ref={password}
                        className="border shadow-inner outline-none p-2.5 w-full focus:ring-blue-500"
                        placeholder=""
                        required={true}
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
                        ref={repassword}
                        className="border shadow-inner outline-none p-2.5 w-full focus:ring-blue-500"
                        placeholder=""
                        required={true}
                      />
                    </div>
                    {message && <p className="p-2 text-red-400 text-lg text-center">{message}</p>}
                    <button
                      disabled = {!passwordStatus}
                      type="submit"
                      className="w-[80%] block disabled:bg-blue-100 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none shadow font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className="p-4">The email token is expired or not valid. Please try to send another email from forgot password screen.</p>
          <Link to={{ pathname: `/dept/${dept}/onClickForgotPass` }}>
            <p className="hover:bg-white hover:text-blue-600 rounded-md p-1 text-white text-lg border border-black bg-blue-600">Return to Forgot Password Screen</p>
          </Link>
        </div>
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
