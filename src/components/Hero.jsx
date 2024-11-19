import React, { useState } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile_pic.jpg";
import backgroundImage from "../assets/bg.png"; // Add your background image
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const imgContainer = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move handler
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
  };

  // Parallax effect values
  const parallaxX = (mousePos.x / window.innerWidth) * 40;
  const parallaxY = (mousePos.y / window.innerHeight) * 40;

  return (
    <div
      id="hero"
      className="relative border-b mt-10 border-neutral-900 pb-4 lg:mb-35 h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: `${50 + parallaxX}% ${20 + parallaxY}%`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Vignesh Uthrapathy
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Designer & Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={imgContainer(0)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="profilepic"
              className="w-[24rem] rounded-md"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
