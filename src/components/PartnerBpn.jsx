import React from "react";

export const PartnerBpn = () => {
  return (
    <div className="container my-20 mx-auto md:px-8">
      <section className="text-center md:text-left">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <h2 className="mb-6 text-4xl font-bold text-green_three md:text-7xl">
              Partner Dan <br />
              <u className="">Aplikasi Kami</u>
            </h2>
            <p className="mb-6 text-neutral-900 dark:text-neutral-300 md:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              quas?
            </p>

            <button
              data-te-ripple-init
              data-te-ripple-color="light"
              type="button"
              className="bg-yellow px-5 py-1 rounded-e-full font-semibold text-green hover:border hover:border-red-500 md:text-xl"
            >
             Inews
            </button>
          </div>

          <div className="mb-6 md:mb-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="mb-12">
                <img
                  src="logo-fsva.png"
                  className="px-6 dark:brightness-150 lg:px-1"
                />
              </div>

              <div className="mb-12">
                <img
                  src="logo-neracapangan.png"
                  className="px-6 dark:brightness-150 lg:px-1 "
                />
              </div>

              <div className="mb-12">
                <img
                  src="PanelHarga-logo.png"
                  className="px-6 dark:brightness-150 lg:px-1 "
                />
              </div>

              <div className="mb-12">
                <img
                  src="glow (2).png"
                  className="px-16 dark:brightness-150 hover"
                />
              </div>
              <div className="mb-12">
                <img
                  src="covid19coid2.png"
                  className="px-6 dark:brightness-150 lg:px-1"
                />
              </div>
              <div className="mb-12">
                <img
                  src="laporgoid2.png"
                  className="px-6 dark:brightness-150 lg:px-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
