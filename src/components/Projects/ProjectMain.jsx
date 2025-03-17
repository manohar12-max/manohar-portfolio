import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framerMotion/varient";

const projects = [
  {
    name: "AI-mock-interview",
    img: "/ai-mock.png",
    link: "https://ai-mock-interview-gemmini.vercel.app/",
    skills: "Next Js,Javascript,TailwindCss",
    github: "https://github.com/manohar12-max/ai-mock-interview",
    align: "right",
  },
  {
    name: "Airbnb",
    img: "/air.png",
    link: "https://airbnb-clone-12.vercel.app/",
    skills: "Next Js,TypeScript,MongoDb,TailwindCss",
    github: "https://github.com/manohar12-max/airclone/tree/main",
    align: "left",
  },
  {
    name: "Qkart",
    img: "/qkart.png",
    link: "https://qkart-e-shop.netlify.app/",
    skills: "ReactJs,Material UI,MongoDb",
    github:
      "https://github.com/manohar12-max/crio-2898manohar-ME_QKART_FRONTEND_V2",
    align: "right",
  },

  {
    name: "Social-app",
    img: "/social.png",
    link: "https://social-app-clone-beta.vercel.app",
    skills: "Reactjs,Vite,Chakra UI,Firebase",
    github: "https://github.com/manohar12-max/instagram-clone/tree/main",
    align: "left",
  },
  {
    name: "Realtor",
    img: "/realtor.png",
    link: "https://realtor-clone-react.vercel.app/",
    skills: "Reactjs,Vite,TailwindCss,Firebase",
    github: "https://github.com/manohar12-max/realtor-clone-react/tree/main",
    align: "right",
  },
  {
    name: "CineHub",
    img: "/cinehub.png",
    link: "https://cinehub-7chl.vercel.app/",
    skills: "NextJs,TypeScript,Tailwind Css,MongoDb",
    github: "https://github.com/manohar12-max/cinehub",
    align: "left",
  },
  {
    name: "Xflix-Video-Share",
    img: "/xflix.png",
    link: "https://xflix.vercel.app/",
    skills: "ReactJs,Material UI,MongoDb",
    github: "https://github.com/manohar12-max/xflix",
    align: "right",
  },

  {
    name: "Next-Auth",
    img: "/auth.png",
    link: "https://next-auth-02.vercel.app/",
    skills: "Next Js,TailwindCss,",
    github: "https://github.com/manohar12-max/next-auth/tree/main",
    align: "left",
  },
  {
    name: "Video-Clone",
    img: "/video.png",
    link: "https://video-clone-khaki.vercel.app/",
    skills: "ReactJs,TailwindCSS,Rapid API",
    github: "https://github.com/manohar12-max/video-clone/tree/master",
    align: "right",
  },

  {
    name: "Gaming-Lists",
    img: "/gaming.png",
    link: "https://gaming-list.vercel.app/",
    skills: "ReactJs,TailwindCSS,Rapid API",
    github: "https://github.com/manohar12-max/gaming-list/tree/main",
    align: "left",
  },
  {
    name: "#Hashtag-marketing",
    img: "/hashtag.png",
    link: "https://hashtag-digital-marketing-page.vercel.app/",
    skills: "HTML,CSS",
    github:
      "https://github.com/manohar12-max/Hashtag-digital-marketing-page/blob/main/js/main.js",
    align: "right",
  },
  {
    name: "Restaurant",
    img: "/restoran.png",
    link: "https://restoran-landing-page.vercel.app/",
    skills: "HTML,CSS",
    github: "https://github.com/manohar12-max/Restoran-landingpage",
    align: "left",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=""
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            skills={project.skills}
            align={project.align}
            link={project.link}
            image={project.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectMain;
