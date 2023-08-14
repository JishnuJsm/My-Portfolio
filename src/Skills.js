import React, { useState, useEffect } from "react";
import Skill from "./Skill";
import Loader from "./Loader";
import SkillsLogo from "../src/assets/Skillsbg.jpeg"

function Skills() {
  const data = [
    {
      name: "HTML",
      proficiency: 80,
      color: "#F06529",
      logo: "https://clipartcraft.com/images/html5-logo-html-5-5.png"
    },
    {
      name: "Css",
      proficiency: 70,
      color: "#2965f1",
      logo:
        "https://th.bing.com/th/id/OIP.8VYg9D9oOnMddlc8TO1RGAAAAA?pid=ImgDet"
    },
    {
      name: "Java",
      proficiency: 75,
      color: "#f89820",
      logo:
        "https://th.bing.com/th/id/OIP.Rw8q6VV2zIEup_2eYDmkFQAAAA?w=181&h=181&c=7&r=0&o=5&pid=1.7"
    },
    {
      name: "Javascript",
      proficiency: 85,
      color: "#f0db4f",
      logo: "https://www.pinclipart.com/picdir/big/16-165768_values-clipart.png"
    },
    {
      name: "React",
      proficiency: 80,
      color: "#61DBFB",
      logo:
        "https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"
    }
  ];
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
      <div className="SkillsMain" style={{backgroundImage: `url(${SkillsLogo})`}}>
        <div className="skills">
          <div className="data leftdata">
            <Skill data={data[0]} />
            <Skill data={data[1]} />
            <Skill data={data[2]} />
          </div>

          <div className="data rightdata">
            <Skill data={data[3]} />
            <Skill data={data[4]} />
          </div>
        </div>
      </div>
    )
  );
}

export default Skills;
