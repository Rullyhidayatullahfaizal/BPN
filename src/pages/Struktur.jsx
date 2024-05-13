import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Organisasi } from "../components/Organisasi";

export const Struktur = () => {
  return (
    <>
      <div className="bg-[#FFFBDA]">
        <Header></Header>
        <Organisasi></Organisasi>
        <Footer></Footer>
      </div>
    </>
  );
};
