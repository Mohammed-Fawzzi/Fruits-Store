import { motion } from "framer-motion";
import React from "react";
import { FaFacebook, FaGithub, FaLeaf, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-secondary/15 mt-12">
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration:1 , delay:0.3}}
        className="container flex justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center gap-2 uppercase py-4">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-600" />
          </div>
        {/* Social */}
            <div className="flex items-center text-3xl text-gray-600 gap-4 cursor-pointer">
                <FaLinkedin/>
                <FaGithub/>
                <FaWhatsapp/>
                <FaFacebook/>
            </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;
