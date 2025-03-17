import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framerMotion/varient";
const SingleProject = ({ name, align, skills, link, image }) => {
  return (
    <motion.div
     variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once:false,amount:0}}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align == "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div className="">
        <h2 className={`md:text-3xl  sm:text-2xl text-orange sm:text-center ${align=="left"? "md:text-end":"md:text-start"} `}>{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align == "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {skills}
        </h2>
        <a
          className={`text-lg flex gap-2 items-center hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align == "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
          href={link}
        >
          View <BiSolidRightTopArrowCircle />{" "}
        </a>
      </div>
      <div className="max-h-[200px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border-1 border-white">
        <div className="w-full h-full  bg-cyan absolute inset-0 opacity-50 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img className="w-full h-full" src={image} alt="project" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
