import React from "react";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="border-b-2 w-full z-[9999] bg-white border-b-background-dark sticky top-0">
      <Navigation className="hidden md:flex" />
      <MobileNav className="md:hidden" />
    </header>
  );
};

export default Header;
