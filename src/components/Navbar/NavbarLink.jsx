import React from "react";
import { Link } from 'react-scroll'
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  // { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
 
];

const NavbarLink = ({setMenuOpen}) => {
  return (
    <ul
      className="flex  text-white font-bold text-center gap-6 sm:flex-col lg:flex-row lg:relative sm:absolute sm:top-[120%] sm:left-[50%] sm:-translate-x-[50%] sm:w-full sm:bg-cyan/30 lg:text-base lg:bg-black 
backdrop-blur-lg py-4"
    >
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
          smooth={true}
          spy={true}
          duration={500}
          offset={130}
           onClick={()=>{setMenuOpen(false)}}
            to={link.section}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLink;
