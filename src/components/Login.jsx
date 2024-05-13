import { EnvelopeSimple } from "@phosphor-icons/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      const token = response.data.token;
      // Simpan token di local storage
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="container mx-auto my-5 min-h-screen flex items-center justify-center ">
        <div className="flex flex-wrap w-full bg-white rounded-tl-lg rounded-bl-lg">
          <div className="w-full md:w-1/2 mb-5">
            <div className="flex flex-col ml-5 mt-20  ">
              <div className="flex justify-center flex-col gap-2 mx-auto ">
                <img src="LogoBPN.png" className="w-28" alt="logo" />
              </div>
              <h4 className="mt-2 mb-5 pb-1 text-center font-bold ">
                Badan Pangan Nasional
              </h4>

              <form onSubmit={Auth}>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-full max-w-md px-4 py-8">
                    <p className="text-center text-red-600 font-bold">{msg}</p>
                    <div className="mb-4 mt-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email admin
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="mb-4 w-full bg-gradient-to-r from-yellow to-green-500 border border-transparent hover:border-green-950 py-2 rounded-md text-black">
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <div className="flex flex-row items-center justify-center pb-4 mb-4">
                <p className="mb-0 font-semibold">Don't have an account?</p>
                <a
                  href="mailto:recipient@example.com"
                  className="mx-2 bg-transparent border border-green_three text-green_two hover:bg-red-500 bg-black hover:text-white rounded"
                >
                  <EnvelopeSimple size={32} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 ">
            <div className="flex flex-col justify-center bg-gradient-to-r from-orange-500 to-pink-500 h-full rounded-tr-lg rounded-br-lg p-4 md:p-10 text-white">
              <div>
                <h4 className="mb-4">We are more than just a company</h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
