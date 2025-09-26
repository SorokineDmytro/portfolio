import React from "react";
import { navBarLinks } from "../../../data/navBarLinks";
import NavBarLink from "./NavBarLink";
import Burger from "./Burger";

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-black items-center">
      <h1 className="text-white text-[30px] md:text-3xl">DS</h1>
      <ul className="hidden lg:flex gap-10">
        {navBarLinks.map((item, index) => (
          <NavBarLink key={index} linkName={item.linkName} linkPath={item.linkPath} />
        ))}
      </ul>
      <Burger></Burger>
    </nav>
  );
};

export default NavBar;
