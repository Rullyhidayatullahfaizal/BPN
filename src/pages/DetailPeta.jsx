import React from "react";
import { Header } from "../components/Header";
import { Pangan } from "../components/maps/Pangan";
import { Footer } from "../components/Footer";


export const DetailPeta = () => {
  return (
    <>
      <div className="bg-[#FFFBDA]">
        <Header></Header>
        <Pangan></Pangan>
        <Footer></Footer>
      </div>
    </>
  );
};
