import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Tailwind CSS", level: "85%" },
    { name: "Framer Motion", level: "70%" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8 text-tealBlue dark:text-lightBlue">My Skills</h2>
      <div className="w-full max-w-4xl">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-6">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-gray-900 dark:text-lightGray">{skill.name}</span>
              <span className="text-sm font-medium text-tealBlue dark:text-lightBlue">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div
                className="bg-tealBlue dark:bg-lightBlue h-4 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;