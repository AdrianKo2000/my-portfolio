import React from "react";


const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-8 pt-32">
      
      <div className="order-2 lg:order-1 flex flex-col lg:h-[650px] justify-center">
        <h2 className="text-4xl font-bold mb-4 text-tealBlue dark:text-lightBlue">About Me</h2>
        <p className="text-lg text-gray-900/60 dark:text-lightGray/60 leading-[1.8]">
          I am a passionate and creative Full-Stack Developer with a love for building robust and scalable web applications. I have a strong foundation in front-end and back-end technologies, and I am always eager to learn new technologies and expand my skillset.
        </p>
        <p className="text-lg text-gray-900/60 dark:text-lightGray/60 leading-[1.8] mt-4">
          When I'm not coding, my hobbies include playing games, reading mangas, and watching movies.
        </p>
      </div>
    </div>
  );
};

export default About;
