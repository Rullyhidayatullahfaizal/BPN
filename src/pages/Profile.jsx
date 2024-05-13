import React from "react";
import { Header } from "../components/Header";
import {  Sejarah } from "../components/about/Sejarah";
import { Footer } from "../components/Footer";
import { Visi } from "../components/about/Visi";

export const Profile = () => {
  return (
    <>
      <div className="  min-h-screen bg-[#FFFBDA]">
        <Header></Header>
        <Sejarah></Sejarah>
        <Visi></Visi>
        <Footer></Footer>
      </div>
    </>
  );
};
