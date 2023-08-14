import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Programmer from "../src/assets/ProgrammerHomePage.png"
import homeBg from "../src/assets/HomePageBG.jpeg"

function Home() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    (isLoading && <Loader />) || (
      <div
        className="homeContainer"
        style={{
          backgroundImage:
            `url(${homeBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="home">
          <div className="homeDiv">
            <div className="homeleft">
              <h4 className="hometext">
                I'm <span style={{ fontSize: "2rem" }}>Jishnu S</span>
              </h4>
              <h3 className="homedynamic">
                <TypeAnimation
                  sequence={[
                    "FullStack Developer",
                    1000,
                    "FrontEnd Developer",
                    1000,
                    "Web Developer",
                    1000
                  ]}
                  speed={50}
                  repeat={Infinity}
                  style={{ color: "yellowgreen" }}
                />
              </h3>
              <Link to="/about">
                <button className="homeaboutbtn">About Me</button>
              </Link>
            </div>
            <div
              className="homeright"
              style={{
                backgroundImage: `url(${Programmer})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "50%",
                height: "75vh"
              }}
            ></div>
            <p className="opentag">{"<>"}</p>
            <p className="closetag">{"</>"}</p>
          </div>
        </div>
      </div>
    )
  );
}

export default Home;
