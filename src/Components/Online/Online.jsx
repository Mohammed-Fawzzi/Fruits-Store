import React from "react";
import OnlineImage from "../../assets/fruit-plate.webp";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Online = () => {
  return (
    <>
      <section className="mb-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.3)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Online <br />
                Fruit Store
              </motion.h1>
              <motion.p
                variants={FadeUp(0.6)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                dignissimos minus consectetur ratione hic at vero saepe est
                natus harum.
              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                beatae voluptatum repellendus ipsum, illum corporis sequi ad.
                Magnam, sit! Voluptate distinctio exercitationem totam eaque
                dicta ipsa quos repellat at? Libero!
              </motion.p>
              <motion.div
                variants={FadeUp(1.2)}
                initial="hidden"
                animate="visible"
              >
                <button className="primary-btn">Download App</button>
              </motion.div>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 200, rotate: 75 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{once: true}}
              src={OnlineImage}
              alt="fruits-splash"
              className="w-[450px] md:max-w-[500px] h-full object-cover drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Online;
