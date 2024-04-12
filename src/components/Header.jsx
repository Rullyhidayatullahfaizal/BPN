import React from "react";

export const Header = () => {
  return (
    <>
      <div>
        <nav className="bg-green_one border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="LogoBPN.png"
                className="h-8"
                alt="Badan-Pangan"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Badan Pangan Nasional
              </span>
            </a>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <button className="block px-4 py-2 mt-1 text-xs font-semibold rounded-lg bg-green_three text-white hover:bg-red-600 hover:text-white focus:bg-green_three focus:text-white focus:outline-none focus:shadow-outline sm:text-lg">
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-semibold rounded-lg  hover:bg-green_three hover:text-white focus:bg-green_three focus:text-white focus:outline-none focus:shadow-outline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-semibold rounded-lg  hover:bg-green_three hover:text-white focus:bg-green_three focus:text-white focus:outline-none focus:shadow-outline"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-semibold rounded-lg  hover:bg-green_three hover:text-white focus:bg-green_three focus:text-white focus:outline-none focus:shadow-outline"
                >
                  Report
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
