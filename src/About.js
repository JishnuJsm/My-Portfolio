import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Aboutbg from "../src/assets/Aboutbg.jpeg"

function About() {
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
      <div className="aboutDiv" style={{backgroundImage:`url(${Aboutbg})`}}>
      <div className="about" >
        <div className="aboutContainer">
          <h3>About Me</h3>
          <p>
            I'm Jishnu. Basicaly I was a Mechatronics Student. I would like to
            become a developer that was my dream too. Currently I'm learning
            Full Stack WebDevelopment course at Newton School. I have good
            Knowledge on Html, Css, Js, and React library. I'm awaiting for a
            FrontEnd opprtunity where i can give my cent percent and explore new
            Technologies.
          </p>
        </div>
      </div>
      </div>
    )
  );
}

export default About;
