import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMailchimp, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaVoicemail } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">
          <span className="flex flex-row flex-nowrap items-center justify-center">
            <FaPhoneAlt className="text-cyan-400 mr-2" />

            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="text-cyan-500 hover:text-cyan-600 transition-colors duration-300"
            >
              {CONTACT.phoneNo}
            </a>
          </span>
        </p>
        <div className="flex flex-row flex-nowrap items-center justify-center">
          <FaEnvelope className="text-cyan-500 mr-2"/>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-cyan-500 hover:text-cyan-600 transition-colors duration-300 border-b"
          >
            {CONTACT.email}
          </a>
        </div>
        <p></p>
      </motion.div>
    </div>
  );
};

export default Contact;
