import React from "react";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framerMotion/varient";
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];
const AllSkillsSm = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-12 my-12">
      {skills.map((skill, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center "
        >
          <skill.icon className="text-7xl text-orange " />
          <p className="text-center mt-4 text-white">{skill.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSm;
