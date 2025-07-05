import React, { useRef, useState, useEffect } from "react";
import LandingImage from "./LandingImage";
import Button from "../../components/Buttons/Button";
import ButtonFilled from "../../components/Buttons/ButtonFilled";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const LandingPage = () => {
  const landingRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: landingRef,
    offset: ["start start", "end start"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(smoothScrollYProgress, [0, 1], ["0%", isSmallScreen ? "50%" : "150%"]);

  return (
    <div ref={landingRef}>
      <div className="grid grid-cols-1 grid-rows-2 text-gray-900 dark:text-lightGray lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 ">
        <motion.div
          className=" order-2 flex h-full  flex-col justify-center text-center lg:order-1 lg:h-[650px] lg:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className=" mb-3 text-3xl font-bold leading-relaxed md:mb-4 md:text-4xl lg:mb-2 lg:leading-loose xl:mb-4 xl:text-5xl"
            variants={{
              hidden: { opacity: 0, y: isSmallScreen ? 10 : 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Hello, I'm{" "}
            <span className=" text-5xl text-tealBlue dark:text-lightBlue md:text-6xl xl:text-7xl">
              Adrian
            </span>
          </motion.h1>
          <motion.h2
            className=" mb-3 text-2xl font-semibold leading-relaxed md:mb-4 md:text-3xl lg:mb-2 lg:leading-loose xl:mb-4 xl:text-4xl"
            variants={{
              hidden: { opacity: 0, y: isSmallScreen ? 10 : 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <span className=" text-4xl text-tealBlue dark:text-lightBlue md:text-5xl xl:text-6xl ">
              Full-Stack
            </span>{" "}
            Developer
          </motion.h2>

          <motion.p
            className="mb-6 text-lg leading-[1.8] text-gray-900/60 dark:text-lightGray/60 md:px-20 lg:px-0"
            variants={{
              hidden: { opacity: 0, y: isSmallScreen ? 10 : 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            I'm a passionate Full-Stack Developer with a knack for building robust and scalable web applications. I enjoy bringing ideas to life from concept to deployment, handling both front-end and back-end development.
          </motion.p>

          <motion.div
            className="flex gap-5 flex-col lg:flex-row"
            variants={{
              hidden: { opacity: 0, y: isSmallScreen ? 10 : 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <Button >Contact Me</Button>
            <ButtonFilled >Download CV</ButtonFilled>
          </motion.div>
        </motion.div>
        <motion.div
          className=" order-1 flex h-[350px] lg:h-[500px] w-full items-center justify-center lg:order-2"
          style={{ y }}
        >
          {" "}
          <LandingImage />{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;