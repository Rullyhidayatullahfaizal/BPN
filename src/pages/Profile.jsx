import React from "react";
import { Header } from "../components/Header";
import {  Sejarah } from "../components/about/Sejarah";

export const Profile = () => {
  return (
    <>
      <div className="  min-h-screen bg-[#FFFBDA]">
        <Header></Header>
        <Sejarah></Sejarah>
      </div>
    </>
  );
};
