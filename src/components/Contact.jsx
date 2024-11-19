import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Get in Touch</motion.h2>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
       className="text-center tracking-tighter">
        <p className="my-4">
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="text-cyan-500 hover:text-cyan-600 transition-colors duration-300"
          >
            {CONTACT.phoneNo}
          </a>
        </p>

        {/* Email link */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-cyan-500 hover:text-cyan-600 transition-colors duration-300 border-b"
        >
          {CONTACT.email}
        </a>
        <p></p>
      </motion.div>
    </div>
  );
};

export default Contact;
