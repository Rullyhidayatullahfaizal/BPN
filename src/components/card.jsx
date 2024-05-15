import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { ServiceData } from "../constans";
import { ArrowUpRight, RadioButton } from "@phosphor-icons/react";

export const Card = () => {
  const [showModal, setShowModal] = useState(null);

  const handleIconClick = (index) => {
    setShowModal(index); // Menampilkan modal saat ikon diklik
  };

  const handleCloseModal = () => {
    setShowModal(null); // Menutup modal saat tombol close diklik
  };

  return (
    <div>
      <div className="px-0 sm:px-0  sm:pt-20 md:px-0 lg:px-0 xl:px-20">
        <div className="rounded-lg  bg-green_three flex flex-col  items-center justify-center">
          <h1 className="header-beras texl-sm sm:text-4xl mt-10 mb-10 text-yellow font-bold  ">
            Daftar Harga Beras Nasional
          </h1>
          <Swiper
            style={{
              "--swiper-pagination-color": "#FFFF00",
            }}
            breakpoints={{
              390: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              391: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              640:{
                slidesPerView:3,
                spaceBetween:10
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1000:{
                slidesPerView:4,
                spaceBetween:20
              },
              1024:{
                slidesPerView:3,
                spaceBetween:20
              }

              
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[80%] "
          >
            {ServiceData.map((item,index) => (
              <SwiperSlide key={item.title}>
                <div className="image-beras flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[180px] sm:h-[250px] sm:w-[180px] lg:h-[400px] lg:w-[300px] overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3">
                    <RadioButton
                      size={32}
                      className=" text-yellow bg-green_three rounded-full group-hover:bg-red-500  w-[32px] h-[32px] transition-transform duration-300 transform-gpu group-hover:scale-110 "
                      onClick={() => handleIconClick(index)}
                    />
                    <h1 className="text-base lg:text-2xl  font-bold text-green_two">
                      {item.title}{" "}
                    </h1>
                    <p className="lg:text-[18px] text-sm font-semibold text-yellow">
                      {item.content}{" "}
                    </p>
                    {/* modal */}
                    {showModal ===index  && (
                      <div className="relative inset-0 flex items-center justify-center mt-3 bg-opacity-50">
                      <div className="bg-green_one w-64 h-36 p-3 shadow-md rounded-sm bg-opacity-40 hover:bg-opacity-70 flex flex-col">
                        <h2 className="text-black font-bold ">Informasi Tambahan :</h2>
                        <p className="text-xs overflow-hidden text-wrap whitespace-nowrap ">Lorem ipsum dolor sit, amet consectetur dadasdsa dasdas dasdasdsadas</p>
                        <button  className = "text-red-500 mt-14 font-bold bg-black rounded px-3 self-end"onClick={handleCloseModal}>Close</button>
                      </div>
                    </div>
                    )}
                  </div>
                  <ArrowUpRight
                    size={32}
                    className="absolute bottom-5 left-5 w-[20px] h-[20px] sm:w-[35] sm::h-[35] text-yellow group-hover:text-green_two group-hover:rotate-45 duration-100"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
