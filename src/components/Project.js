import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  const { name, technologies, github, link, description, image } = project;

  return (
    <div className="project">
      <div className="project-img-container">
        <a
          href={link}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-img" src={image} alt="" />
        </a>
      </div>
      <div className="details">
        <h3 className="project-name-container">
          <a
            className="project-name"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </h3>
        <div className="description-box">{description}</div>
        <div className="technologies">
          {technologies.map((technology) => (
            <span key={technology} className="technology">
              {technology}
            </span>
          ))}
        </div>
        <div className="logos">
          <a href={github} target="_blank" rel="noreferrer">
            <i className="fab fa-github logo"></i>
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <i className="fas fa-external-link-alt logo"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
