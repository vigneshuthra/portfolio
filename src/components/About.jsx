import React from "react";
import aboutImg from "../assets/about_me.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 mt-10 lg:mt-0 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className="w-[26rem]" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-center">
            <div
              className="my-2 max-w-xl text-xs sm:text-sm md:text-md lg:text-lg py-2 text-justify"
              dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
