import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Pilosopi } from "../components/Pilosopi";

export const Logo = () => {
  return (
    <>
      <div className="bg-[#FFFBDA]">
        <Header></Header>
        <Pilosopi></Pilosopi>
        <Footer></Footer>
      </div>
    </>
  );
};
