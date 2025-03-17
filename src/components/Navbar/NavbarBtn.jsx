import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full font-bold text-white border-[0.5px] bg-gradient-to-r from-cyan to-orange   border-cyan flex items-center gap-1 hover:scale-110 transition-all duration-500">
      Resume <LuArrowDownRight className="sm:hidden md:block"/>
    </button>
  );
};

export default NavbarBtn;
