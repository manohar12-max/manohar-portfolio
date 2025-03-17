import React from "react";
import MySkillsText from "./MySkillsText";
import MyskillsAllSkills from "./MyskillsAllSkills";
import AllSkillsSm from "./AllSkillsSm";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framerMotion/varient";

const Myskillsmain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] mx-auto px-4 min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className=""
        >
          <MySkillsText />
        </motion.div>
        <div className="absolute bottom-[50px] left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <MyskillsAllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSm />
        </div>
      </div>
    </div>
  );
};

export default Myskillsmain;
