"use client";
import React, { useEffect, useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (gallery, index) => {
    setCurrentGallery(gallery);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentGallery([]);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    console.log("right");

    setCurrentIndex((prevIndex) =>
      prevIndex === currentGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to the previous image
  const handlePrev = () => {
    console.log("left");

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentGallery.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflowY = "hidden"; // Also prevent scrolling on the <html> element
    } else {
      document.body.style.overflowY = "auto"; // Reset to default (scrollable)
      document.documentElement.style.overflowY = "auto"; // Reset <html> element overflow
    }

    // Cleanup function to reset the overflow style when component unmounts or modal closes
    return () => {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    };
  }, [modalOpen]);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4 lg:mr-10 cursor-pointer"
              onClick={() => openModal(project.gallery, 0)}
            >
              <img src={project.image} alt="" width={500} height={200} />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full mt-4 max-w-xl lg:w-3/4 lg:mt-0"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-xs sm:text-sm md:text-md lg:text-lg text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-transparent p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-6 text-white bg-gray-900 bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Display current gallery image with Framer Motion */}
            {/* Display current gallery item (image or video) */}
            <motion.div
              key={currentGallery[currentIndex]} // Key triggers animation when the media changes
              initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
              animate={{ opacity: 1, x: 0 }} // Fade in and slide to center
              exit={{ opacity: 0, x: -100 }} // Fade out and slide to the left
              transition={{ duration: 0.5 }} // Animation duration
              className="w-full h-[200px] sm:w-[600px] sm:h-[300px] lg:w-[1200px] lg:h-[600px] rounded-lg"
            >
              {currentGallery[currentIndex].endsWith(".mp4") ? (
                <video
                  src={currentGallery[currentIndex]}
                  controls
                  muted
                  autoPlay
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <img
                  src={currentGallery[currentIndex]}
                  alt={`Gallery ${currentIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </motion.div>

            {currentIndex > 0 && ( 
              <button
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white bg-opacity-50 w-10 h-10 flex items-center justify-center rounded-full"
                onClick={handlePrev}
              >
                &#8592;
              </button>
            )}
            {currentIndex < currentGallery.length - 1 && ( 
              <button
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white bg-opacity-50 w-10 h-10 flex items-center justify-center rounded-full"
                onClick={handleNext}
              >
                &#8594;
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;