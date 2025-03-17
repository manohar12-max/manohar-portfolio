import React from "react";
import ExperienceSingle from "./ExperienceSingle";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framerMotion/varient";
const experiences = [
  {
    job: "Front-End Developer",
    company: "Alex Apps",
    date: "2022 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Nucamp",
    date: "2023 - Present",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Sprints",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
];
const AllExpirence = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((item, index) => (
        <>
          <ExperienceSingle
            key={index}
            job={item.job}
            company={item.company}
            date={item.date}
            text={item.responsibilities}
          />
          {index < 2 && (
            <motion.div
            variants={fadeIn("right",0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once:false,amount:0}}
            >
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </>
      ))}
    </div>
  );
};

export default AllExpirence;
