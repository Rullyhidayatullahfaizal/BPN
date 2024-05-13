import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true); 
        } else {
            setIsLoggedIn(false); 
        }
    }, []);

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogout = async () => {
        try {
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            navigate("/");
            setShowModal(false); 
        } catch (error) {
            console.log(error);
        }
    };

    const modalLogout = () => {
      setShowModal(true)
    }

    const modalCencel = () => {
      setShowModal(false); // Tutup modal konfirmasi
  };

  return (
    <>
      <div>
        <nav className="bg-green_one border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="LogoBPN.png" className="h-8" alt="Badan-Pangan" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Badan Pangan Nasional
              </span>
            </a>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              {isLoggedIn ? (
                <button
                  onClick={modalLogout}
                  className="block px-4 py-2 mt-1 text-xs font-semibold rounded-lg bg-green_three text-white hover:bg-red-600 hover:text-white focus:bg-green_three focus:text-white focus:outline-none focus:shadow-outline sm:text-lg"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="block px-4 py-2 mt-1 text-xs font-semibold rounded-lg bg-green_three text-white hover:bg-red-600 hover:text-white focus:bg-green_three focus:text-white focus:outline-none focus:shadow-outline sm:text-lg"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
      <nav className="bg-[#FFFBDA] dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm font-semibold rounded-lg  hover:bg-green_three hover:text-white focus:bg-green_three focus:text-white focus:outline-none focus:shadow-outline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm font-semibold rounded-lg  hover:bg-green_three hover:text-white focus:bg-green_three focus:text-white focus:outline-none focus:shadow-outline"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/report"
                  className="block px-4 py-2 text-sm font-semibold rounded-lg  hover:bg-green_three hover:text-white focus:bg-green_three focus:text-white focus:outline-none focus:shadow-outline"
                >
                  Report
                </Link>
              </li>
              <li>
                <Link
                  to="/peta"
                  className="block px-4 py-2 text-sm font-semibold rounded-lg  hover:bg-green_three hover:text-white focus:bg-green_three focus:text-white focus:outline-none focus:shadow-outline"
                >
                  Detail Peta
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal Konfirmasi Logout */}
      {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
                                            Konfirmasi Logout
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Apakah Anda yakin ingin logout ?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={handleLogout} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green_three text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Ya
                                </button>
                                <button onClick={modalCencel} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-green_one focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Batal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </>
  );
};
