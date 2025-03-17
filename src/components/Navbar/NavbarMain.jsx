import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center px-4 py-2 rounded-l-full  rounded-r-full border-[1px] border-orange ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLink  setMenuOpen={setMenuOpen} />
        </div>
        <NavbarBtn />
      </div>
      
      <div className="sm:block lg:hidden border-[0.5px] p-6 border-orange flex justify-center rounded-full  ">
        <button
          onClick={toggleMenu}
          className="text-2xl p-3 border border-orange  rounded-full text-white"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
