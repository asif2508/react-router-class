import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <Navbar rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <h3 className="font-bold text-white text-[28px]">Amazon</h3>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink className="text-[18px]" as={Link} to="/">
          Home
        </NavbarLink>
        <NavbarLink className="text-[18px]" as={Link} to="/view-news">
          News
        </NavbarLink>
        <div className="mt-1 relative">
          <FaShoppingCart className="text-white text-[20px]" />
          <span className="absolute top-[-15px] text-white text-[10px] right-[-10px] bg-red-600 h-[20px] w-[20px] rounded-full flex justify-center items-center">
            {cart.length}
          </span>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
