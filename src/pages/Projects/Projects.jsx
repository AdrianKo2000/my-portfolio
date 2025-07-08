import React from "react";
import ProjectCard from "../../components/Projects/ProjectCard";

const Projects = () => {
  const projects = [
    {
      name: "Odin Recipes",
      description: "A simple recipe website built with HTML and CSS.",
      image: "/odin-recipes.png",
      liveDemo: "https://adrian-projects.github.io/odin-recipes/",
      sourceCode: "https://github.com/Adrian-Projects/odin-recipes"
    },
    {
      name: "Odin Landing Page",
      description: "A landing page for a fictional product, built with HTML and CSS.",
      image: "/odin-landing-page.png",
      liveDemo: "https://adrian-projects.github.io/odin-landing-page/",
      sourceCode: "https://github.com/Adrian-Projects/odin-landing-page"
    },
    {
      name: "Rock Paper Scissors",
      description: "A simple Rock Paper Scissors game built with JavaScript.",
      image: "img/rock-paper-scissors.png",
      liveDemo: "https://adrianko2000.github.io/rock-paper-scissor/",
      sourceCode: "https://github.com/AdrianKo2000/rock-paper-scissor.git"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-32">
      <h2 className="text-4xl font-bold mb-8 text-tealBlue dark:text-lightBlue">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;