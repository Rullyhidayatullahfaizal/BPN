import React from "react";
import { useNavigate } from "react-router-dom";

export const Peta = () => {

    const navigate = useNavigate();

    const handleDetailPeta = () => {
        navigate("/peta");
    };

  return (
    <>
      <div className="mt-20 flex flex-col justify-center">
        <h2 className="text-center font-bold text-lg text-green_three sm:text-2xl lg:text-3xl ">
            Peta Ketahanan Dan Kerentanan Pangan
        </h2>
        <div className="px-8 mt-5">
            <img src="petabpn.png" alt="Peta bpn" className="max-w-full h-auto mx-auto sm:w-2/3"/>
        </div>
        <button onClick={handleDetailPeta} className="bg-green_three rounded px-4 py-2 mt-5 w-[fit-content] mx-auto text-yellow hover:bg-red-500 font-medium sm:px-7 sm:py-3 sm:text-xl">Detail Peta</button>
      </div>
    </>
  );
};
