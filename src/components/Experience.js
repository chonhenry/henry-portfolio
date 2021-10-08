import React from "react";
import { experiences } from "../assets/data";
import "./Experience.css";

const Experience = () => {
  const renderExperiences = () => {
    return experiences.map((experience) => (
      <div key={experience.title + "-" + experience.company}>
        <h2 className="experience-heading">
          <span className="heading-num">01.</span> My Experience
        </h2>
        <div className="job-heading">
          {experience.title}
          <span className="company">
            {" "}
            @{" "}
            <a href={experience.website} target="_blank" rel="noreferrer">
              {experience.company}
            </a>
          </span>
        </div>
        <div className="duration">December 2020 - June 2021</div>
        {renderResponsibilities(experience.responsibilities)}
      </div>
    ));
  };

  const renderResponsibilities = (responsibilities) => {
    return responsibilities.map((responsibility) => (
      <div className="description" key={responsibility.id}>
        {responsibility.description}
        <i className="fas fa-caret-right"></i>
      </div>
    ));
  };

  return (
    <div className="experience" id="experience">
      {renderExperiences()}
    </div>
  );
};

export default Experience;
