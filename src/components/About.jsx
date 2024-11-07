import React from "react";
import aboutImg from "../assets/about_me.png";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className="w-[26rem]" />
          </div>
         
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-center">
              <p className="my-2 max-w-xl py-2">{ABOUT_TEXT}</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
