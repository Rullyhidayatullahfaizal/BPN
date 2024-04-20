import React from "react";
import { Login } from "../components/Login";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Auth = () => {
  return (
    <>
      <div className="bg-white-one">
        <Login></Login>
        <Footer></Footer>
      </div>
    </>
  );
};
