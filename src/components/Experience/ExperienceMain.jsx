import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExpirence from "./AllExpirence";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framerMotion/varient";
const ExperienceMain = () => {
  return (
    <div id="experience" className=" max-w-[1200px] px-4 mx-auto">
      <motion.div
      variants={fadeIn("down",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:0.7}}
       className="">
      <ExperienceText />
      </motion.div>
      <motion.div
      variants={fadeIn("down",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:0.7}}
       className="">
      <ExperienceTop />
      </motion.div>
      <div className="w-full bg-light-brown h-1 mt-4 sm:hidden lg:block mx-auto"></div>
      <AllExpirence />
    </div>
  );
};

export default ExperienceMain;
