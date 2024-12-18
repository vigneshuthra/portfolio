import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-black">
      <div className="fixed top-0 -z-10 h-full w-full"> </div>
      <div className=" overflow-x-hidden absolute top-0 z-[-2] min-h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0),)]">
        <div className="container min-w-full mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experiences />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
