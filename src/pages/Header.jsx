import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar  rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <h3 className="font-bold text-white text-[28px]">Amazon</h3>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/">
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/view-news">
          News
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
