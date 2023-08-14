import React, { useState, useEffect } from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Loader from "./Loader";
import educationbg from "../src/assets/Educationbg.jpeg"
import experiencebg from "../src/assets/Experiencebg.jpeg"

export default function Qualification() {
  const [isEducation, setIsEducation] = useState(true);
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
        className="education"
        style={{
          backgroundImage: `url(${
            isEducation
              ? educationbg
              : experiencebg
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="testing">
          <div className="educationDiv">
            <div className="switch">
              <h3
                style={{
                  transform: isEducation ? "scale(0.9)" : "scale(1)",
                  color: isEducation ? "yellow" : "black",
                  backgroundColor: isEducation
                    ? "black"
                    : "rgba(255,255,255,0.5)",
                  border: "0",
                  width: "100px",
                  textAlign: "center"
                }}
                onClick={() => setIsEducation(true)}
              >
                Education
              </h3>
              <h3
                style={{
                  transform: isEducation ? "scale(1)" : "scale(0.9)",
                  color: isEducation ? "black" : "yellow",
                  backgroundColor: isEducation
                    ? "rgba(255,255,255,0.5)"
                    : "black",
                  border: "0",
                  width: "100px",
                  textAlign: "center"
                }}
                onClick={() => setIsEducation(false)}
              >
                Experience
              </h3>
            </div>
            <div className="educationContainer">
              {(isEducation && (
                <>
                  <div className="edu1">
                    <div className="edu1In">
                      <div className="eduDiv">
                        <div className="eduIconContainer">
                          <div className="eduIcon">
                            <CodeOffIcon />
                          </div>
                        </div>
                        <div className="eduTextContainer">
                          <h5 className="eduText">
                            <span>Full Stack</span>
                            Web Development
                          </h5>
                        </div>
                      </div>
                      <div className="eduInfoDiv">
                        <div className="eduInfoContainer">
                          <div className="eduInfo">
                            <span>Newton School</span>
                            <span>
                              <CalendarMonthIcon /> 2022 - Present
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="edu1">
                    <div className="edu1In">
                      <div className="eduDiv">
                        <div className="eduIconContainer">
                          <div className="eduIcon">
                            <PrecisionManufacturingIcon />
                          </div>
                        </div>
                        <div className="eduTextContainer">
                          <h5 className="eduText">
                            <span>B.Tech </span>
                            in Mechatronics
                          </h5>
                        </div>
                      </div>
                      <div className="eduInfoDiv">
                        <div className="eduInfoContainer">
                          <div className="eduInfo">
                            <span>Bharath University</span>
                            <span>
                              <CalendarMonthIcon /> 2021 - Present
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="edu1">
                    <div className="edu1In">
                      <div className="eduDiv">
                        <div className="eduIconContainer">
                          <div className="eduIcon">
                            <SquareFootIcon />
                          </div>
                        </div>
                        <div className="eduTextContainer">
                          <h5 className="eduText">
                            <span>Diploma</span>
                            in Mechatronics
                          </h5>
                        </div>
                      </div>
                      <div className="eduInfoDiv">
                        <div className="eduInfoContainer">
                          <div className="eduInfo">
                            <span>Kongu Polytechnic College</span>
                            <span>
                              <CalendarMonthIcon /> 2018 - 2020
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )) || (
                <>
                  <div className="edu1">
                    <div className="edu1In">
                      <div className="eduDiv">
                        <div className="eduIconContainer">
                          <div className="eduIcon">
                            <EngineeringIcon />
                          </div>
                        </div>
                        <div className="eduTextContainer">
                          <h5 className="eduText">
                            <span>Maintenance</span>
                            Assistant
                          </h5>
                        </div>
                      </div>
                      <div className="eduInfoDiv">
                        <div className="eduInfoContainer">
                          <div className="eduInfo">
                            <span>Yanmar Engine Manufacturing India</span>
                            <span>
                              <CalendarMonthIcon /> Jan 2021 - Dec 2022
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
