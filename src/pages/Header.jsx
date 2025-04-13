import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const Header = () => {
  const { cart, setCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  console.log(showCart);
  const handleIncrease = (item) => {
    const updatedCart = [];
    for (const i of cart) {
      if (i.id === item.id) {
        updatedCart.push({ ...i, count: i.count + 1 });
      } else {
        updatedCart.push(i);
      }
    }
    setCart(updatedCart);
  };

  const handleRemove = (item) => {
    const updatedCart = cart.filter((i) => i.id !== item.id);
    setCart(updatedCart);
  };
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
          <FaShoppingCart
            onClick={() => setShowCart(!showCart)}
            className="text-white text-[20px]"
          />
          <span className="absolute top-[-15px] text-white text-[10px] right-[-10px] bg-red-600 h-[20px] w-[20px] rounded-full flex justify-center items-center">
            {cart.length}
          </span>
          {showCart && (
            <div className="h-[400px] w-[350px] bg-white border-1 border-black absolute right-[-175px] p-2">
              {cart?.map((item) => (
                <div
                  className="flex justify-between items-center gap-2 mb-2"
                  key={item.id}
                >
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src={item?.image}
                      className="h-[40px] w-[40px] rounded-sm"
                      alt=""
                    />
                    <div>
                      <p>{item?.title.slice(0, 10)}</p>
                      <p>
                        ${item?.price} X {item.count}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <p className="text-[18px]">-</p>
                    <p className="text-[18px]">{item?.count}</p>
                    <p
                      onClick={() => handleIncrease(item)}
                      className="text-[18px]"
                    >
                      +
                    </p>
                  </div>
                  <p>${item?.price * item.count}</p>

                  <button
                    onClick={() => handleRemove(item)}
                    className="text-[18px]"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
