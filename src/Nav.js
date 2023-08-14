import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import DeveloperModeRoundedIcon from "@mui/icons-material/DeveloperModeRounded";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";

function Nav() {
  return (
    <>
      <nav className="navBar">
        <ul className="navBarUl">
          <li>
            <Link to="/" className="NavBarIcon" title="Home">
              <HomeRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="/about" title="About" className="NavBarIcon">
              <InfoRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="/skills" title="Skills" className="NavBarIcon">
              <HistoryEduIcon />
            </Link>
          </li>
          {/* <li>
            <Link
              to="/experience"
              title="Work experience"
              className="NavBarIcon"
            >
              <WorkHistoryRoundedIcon />
            </Link>
          </li> */}
          <li>
            <Link
              to="qualifications"
              title="Qualification"
              className="NavBarIcon"
            >
              <SchoolRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="projects" title="Projects" className="NavBarIcon">
              <DeveloperModeRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="contact" title="Contact" className="NavBarIcon">
              <ContactsRoundedIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
