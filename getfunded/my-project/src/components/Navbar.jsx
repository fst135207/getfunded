import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks, Buttons } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="getfunded" className="w-[142px] h-[38px]" />

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        </ul>

        <ul className="list-none sm:flex hidden justify-end items-end">
        {/* Add Buttons to the navbar */}
        {Buttons.map((Buttons, index) => (
          <li
            key={Buttons.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === Buttons.title ? "text-white" : "text-dimWhite"
            } ${index === Buttons.length - 1? "mr-0" : "mr-10"}`}
            onClick={() => setActive(Buttons.title)}
          >
            <a href={`#${Buttons.id}`}>{Buttons.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-6 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index)  => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-4" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            {Buttons.map((button, index) => (
              <li
                key={button.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === button.title ? "text-white" : "text-dimWhite"
                } ${index === Buttons.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(button.title)}
              >
                <a href={`#${button.id}`}>{button.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;