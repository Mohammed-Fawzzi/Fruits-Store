import React from "react";
import bannerImage from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const Today = () => {
    const bgStyle = {
        backgroundImage : `url(${bannerImage})`,
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundRepeat : "no-repeat",
        backgroundAttachment: "fixed"
    }
  return (
    <>
      <section>
        <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
          {/* Blank */}
          <div></div>
          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[420px]">
              <motion.h1
                variants={FadeLeft(0.3)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Get Fresh <br />
                Fruits Today
              </motion.h1>
              <motion.p
                variants={FadeLeft(0.6)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                dignissimos minus consectetur ratione hic at vero saepe est
                natus harum.
              </motion.p>
              <motion.div
                variants={FadeLeft(0.9)}
                initial="hidden"
                animate="visible"
              >
                <button className="primary-btn">Learn More</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Today;
