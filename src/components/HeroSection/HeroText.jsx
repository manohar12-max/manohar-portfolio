import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framerMotion/varient";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full lg:text-left sm:text-center">
      <motion.h2
       variants={fadeIn("down",0.2)}
       initial="hidden"
       whileInView="show"
       viewport={{once:false,amount:0}}
       className="lg:text-2xl sm:text-xl uppercase text-cyan">
        Full Stack Developer
      </motion.h2>
      <motion.h1 
        variants={fadeIn("right",0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0}}
      className="lg:text-6xl sm:text-4xl font-bold font-special text-orange">
        Manohar Dhumal
      </motion.h1>
      <motion.p
      variants={fadeIn("up",0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:0}}
       className="text-white text-lg ">
        A passionate software engineer with a keen eye for detail <br /> and a
        strong foundation in JavaScript.
      </motion.p>
    </div>
  );
};

export default HeroText;
