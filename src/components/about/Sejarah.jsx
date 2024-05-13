import React from "react";

export const Sejarah = () => {
  return (
    <>
      <div className="">
        <div
          className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat sm:w-3/4 sm:mx-auto p-12 text-center mt-5"
          style={{ backgroundImage: "url('padiprofile.jpg')", height: "450px" }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex h-full items-center  justify-center">
              <div className="text-white">
                <img
                  src="LogoBPN.png"
                  alt=""
                  className="absolute w-12 top-24 left-1/2 transform -translate-x-1/2 sm:top-24 sm:w-16 "
                />
                <h2 className="mb-4 text-2xl font-semibold text-green_one sm:text-4xl ">
                  BADAN PANGAN NASIONAL
                </h2>
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
          <h1 className="text-center mt-20 font-bold text-3xl text-green_three sm:text-4xl">
            SEJARAH
          </h1>
          <div>
            <div className="container relative flex flex-col justify-between h-full max-w-7xl px-10 mx-auto xl:px-0 mt-5">
              <h2 className="mb-1 text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
                BPN
              </h2>
              <p className="mb-12 text-base font-semibold text-gray-700 sm:text-lg">
                Sejarah BPN sejak dibentuk
              </p>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="relative h-full">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green_two rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-green_two rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        2021 – Sekarang
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Badan Pangan Nasional dibentuk pada tanggal 29 Juli 2021
                      melalui Peraturan Presiden Nomor 66 Tahun 2021. Tugas dan
                      fungsi yang dilaksanakan oleh BKP diintegrasikan menjadi
                      tugas dan fungsi Badan Pangan Nasional.
                    </p>
                  </div>
                </div>
                <div className="relative h-full">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green_one rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-green_one rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        2004 – 2020
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      BBKP berubah menjadi Badan Ketahanan Pangan (BKP) melalui
                      Peraturan Menteri Pertanian Nomor 61 Tahun 2010, Peraturan
                      Presiden Nomor 45 Tahun 2015 dan Peraturan Menteri
                      Pertanian Nomor 40 Tahun 2015. BKP memiliki tugas
                      menyelenggarakan koordinasi dan perumusan kebijakan di
                      bidang peningkatan diversifikasi dan pemantapan ketahanan
                      pangan.
                    </p>
                  </div>
                </div>
                {/* <!-- New card 1 --> */}
                <div className="relative h-full">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green_one rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-green_one rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        2000 – 2003
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      BUKP dan Sekretariat Pengendali (Setdal) Bimas dilebur
                      menjadi Badan Bimas Ketahanan Pangan (BBKP) berdasarkan
                      Keputusan Presiden Nomor 177 Tahun 2000 yang mempunyai
                      tugas melaksanakan pengkajian, pengembangan dan koordinasi
                      pemantapan ketahanan pangan.
                    </p>
                  </div>
                </div>
                {/* <!-- New card 2 --> */}
                <div className="relative h-full">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green_two rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-green_two rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        1999
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-red-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Badan Urusan Ketahanan Pangan (BUKP) dibentuk melalui
                      Keputusan Presiden Nomor 136 Tahun 1999 dengan tugas
                      melaksanakan pengkajian dan pengembangan ketahanan pangan
                      berdasarkan kebijakan Menteri Pertanian dan peraturan
                      perundang-undangan yang berlaku.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
