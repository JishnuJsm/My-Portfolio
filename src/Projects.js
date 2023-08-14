import React, { useState, useEffect } from "react";
import MathPartner from "../src/assets/MathPartner.png";
import Netflix from "../src/assets/Netflix.png";
import TodoList from "../src/assets/TodoList.png";
import { Link } from "react-router-dom";
import MathPartnerV from "../src/assets/MathPartnerScreen.mp4";
import NetflixV from "../src/assets/NetflixScreen.mp4";
import TodoAppV from "../src/assets/TodoAppScreen.mp4";
import Loader from "./Loader";
import ProjectBg from "../src/assets/Projectsbg.jpeg"

function Project({ name, backgroundImage, url, video }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="project"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 0 5px 1px rgba(0,0,0,0.5)",
          filter: isHover ? "blur(1px)" : "blur(0.1px)"
        }}
      >
        {
          <video
            src={video}
            width="100%"
            height="100%"
            loop="loop"
            autoPlay={true}
          />
        }
      </div>
      {isHover && (
        <div
          style={{
            position: "relative",
            top: video ? "-158px" : "-40px",
            zIndex: "1",
            color: "yellow"
          }}
        >
          <Link
            to={url ? url : "/projects"}
            style={{
              padding: "6px 20px",
              position: "relative",
              left: "5%",
              top: "53%",
              textDecoration: "none",
              backgroundColor: "black",
              color: "yellow",
              borderRadius: "5px",
              border: "0",
              fontSize: "1rem",
              zIndex: "1"
            }}
          >
            {url ? "view" : "Coming Soon.."}
          </Link>
          <h5
            style={{
              position: "relative",
              left: "5%",
              top: "55%",
              zIndex: "1"
            }}
          >
            {name}
          </h5>
          <div
            style={{
              position: "relative",
              top: "8px",
              width: "100%",
              height: "80px",
              backgroundColor: "rgba(0,0,0,0.5)"
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
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
      <div className="projects">
        <div className="projectsDiv" style={{backgroundImage: `url(${ProjectBg})`}}>
          <h3>My work</h3>
          <div className="projectContainer">
            <Project
              name="Math Partner"
              backgroundImage={MathPartner}
              url="https://jishnujsm.github.io/Maths-Partner---Javascript-Project---s218np8lws6e/"
              video={MathPartnerV}
            />
            <Project
              name="NetFlix Clone"
              backgroundImage={Netflix}
              url=""
              video={NetflixV}
            />
            <Project
              name="Todo App"
              backgroundImage={TodoList}
              url=""
              video={TodoAppV}
            />
          </div>
        </div>
      </div>
    )
  );
}
