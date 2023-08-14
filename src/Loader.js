import React from "react";
import LogoRound from "../src/assets/Logo Circle.png";
import LogoBg from "../src/assets/Logo TextBg.png";

export default function Loader() {
  return (
    <div className="loaderDiv">
      <img className="loaderImg circle" src={LogoRound} alt="logoRound" />
      <img className="loaderImg text" src={LogoBg} alt="LogoChar" />
    </div>
  );
}
