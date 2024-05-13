import React from "react";

export const Sejarah = () => {
  return (
    <>
      <div className="">
        <div
          className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat sm:w-3/4 sm:mx-auto p-12 text-center mt-5"
          style={{ backgroundImage: "url('padiprofile.jpg')", height: "450px", }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex h-full items-center  justify-center">
              <div className="text-white">
                <img src="LogoBPN.png" alt="" className="absolute w-12 top-24 left-1/2 transform -translate-x-1/2 sm:top-24 sm:w-16 " />
                <h2 className="mb-4 text-2xl font-semibold text-green_one sm:text-4xl ">BADAN PANGAN NASIONAL</h2>
                <button
                  type="button"
                  className="rounded border-2 border-green_one px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-green_one transition duration-150 ease-in-out hover:border-gretext-green_one hover:bg-neutral-500 hover:bg-opacity-10 hover:text-green_one focus:border-gretext-green_one focus:text-green_one focus:outline-none focus:ring-0 active:border-yellow active:text-yellow dark:hover:bg-gretext-green_one dark:hover:bg-opacity-10"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  About Me
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center mt-10 font-bold text-4xl text-green_three">SEJARAH</h1>
        </div>
      </div>
    </>
  );
};
