import React from "react";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-[9999] w-full border-b-2 border-b-background-dark bg-white">
      <Navigation className="hidden md:flex" />
      <MobileNav className="md:hidden" />
    </header>
  );
};

export default Header;
