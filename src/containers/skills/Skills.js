import React, { useContext } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import StackProgress from "../skillProgress/skillProgress";


export default function Skills() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <Fade bottom duration={1000} distance="40px">
        <div className="skills-text-div">
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            {skillsSection.title}
          </h1>
          <SoftwareSkill />
        </div>
        <StackProgress />
      </Fade>
    </div >
  );
}
