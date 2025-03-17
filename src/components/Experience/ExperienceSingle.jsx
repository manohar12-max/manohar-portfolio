import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framerMotion/varient";
const ExperienceSingle = ({ job, company, date, text }) => {
  return (
    <motion.div 
    variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:0}}
    className="md:h-[350px] md:w-[240px] sm:w-full sm:h-auto  border-2 border-orange border-dashed rounded-2xl mt-12 p-4">
      <p className="text-cyan font-body">{job}</p>
      <p className="text-orange">{company}</p>
      <p className="text-light-grey">{date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {text.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceSingle;
