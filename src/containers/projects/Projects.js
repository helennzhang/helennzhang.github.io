import React, { useContext } from "react";
import "./Projects.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { projectSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Projects() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {projectSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {projectSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {projectSection.projectCards.map((card) => {
              return (
                <ProjectCard
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    subtitle: card.subtitle,
                    description: card.description,
                    footer: card.footerLink,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
