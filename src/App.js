import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import Skills from "./Skills";
import Qualification from "./Qualification";
import Contact from "./Contact";
import Projects from "./Projects";
import Loader from "./Loader";

export default function App() {
  // States
  const [ishomeVisted, setIsHomeVisited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="App">
      {(isLoading && <Loader />) || (
        <BrowserRouter>
          <Nav></Nav>
          {true ? (
            <>
              <div>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/skills" element={<Skills />}></Route>
                  <Route
                    path="/qualifications"
                    element={<Qualification />}
                  ></Route>
                  {/* <Route path="/education" element={<Education />}></Route> */}
                  <Route path="/projects" element={<Projects />}></Route>
                  <Route path="/contact" element={<Contact />}></Route>
                </Routes>
              </div>
            </>
          ) : (
            <Routes>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          )}
        </BrowserRouter>
      )}
    </div>
  );
}
