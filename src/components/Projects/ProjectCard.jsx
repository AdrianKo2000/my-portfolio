import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-lightGray dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-tealBlue dark:text-lightBlue">{project.name}</h3>
        <p className="text-gray-900/60 dark:text-lightGray/60 mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-tealBlue dark:text-lightBlue hover:underline">Live Demo</a>
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="text-tealBlue dark:text-lightBlue hover:underline">Source Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;