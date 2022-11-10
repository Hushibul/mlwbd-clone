import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import logo from "../assets/images/logo-mlwbd.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section className="flex flex-col">
      <nav className="hidden md:flex justify-between items-center bg-black h-[70px] px-20">
        <Link to="/">
          <div className="bg-[#23241f] py-3 px-4">
            <img className="w-[200px]" src={logo} alt="logo" />
          </div>
        </Link>
        <ul className="flex px-4">
          <li className="px-4 text-sm text-white hover:text-red-600">Movies</li>
          <li className="px-4 text-sm text-white hover:text-red-600">Genres</li>
          <li className="px-4 text-sm text-white hover:text-red-600">
            Special Categories
          </li>
          <li className="px-4 text-sm text-white hover:text-red-600">
            Join Us On Telegram{" "}
          </li>
          <li className="px-4 text-sm text-white hover:text-red-600">
            BSub Movies
          </li>
        </ul>

        <input
          type="text"
          placeholder="Search..."
          className="bg-[#23241f] px-4 py-2 w-[350px] rounded placeholder:text-sm placeholder:text-gray-500"
        />
        <BiSearch className="text-white absolute right-[100px] z-10 text-xl" />
      </nav>

      {/* Moblie Nav  */}
      <nav
        name="mobile"
        className={
          menu
            ? "h-screen flex flex-col justify-start items-center my-10"
            : "hidden"
        }
      >
        <Link to="/">
          <div className="bg-[#23241f] py-3 px-4 mb-6">
            <img className="w-[200px]" src={logo} alt="logo" />
          </div>
        </Link>
        <ul className="flex flex-col px-4 items-center pb-6">
          <li className="text-4xl py-4 text-white hover:text-red-600">
            Movies
          </li>
          <li className="text-4xl py-4 text-white hover:text-red-600">
            Genres
          </li>
          <li className="text-4xl py-4 text-white hover:text-red-600">
            Special Categories
          </li>
          <li className="text-4xl py-4 text-white hover:text-red-600">
            Join Us On Telegram{" "}
          </li>
          <li className="text-4xl py-4 text-white hover:text-red-600">
            BSub Movies
          </li>
        </ul>

        <input
          type="text"
          placeholder="Search..."
          className="bg-[#23241f] px-4 py-4 w-[350px] rounded placeholder:text-2xl placeholder:text-gray-500"
        />
        <button className="px-4 py-2 bg-red-600 text-white text-2xl rounded-md mt-6">
          Search
        </button>
      </nav>
      <div className="bg-[#23241f] my-8 md:hidden">
        {!menu ? (
          <GiHamburgerMenu
            onClick={() => setMenu(!menu)}
            className="absolute top-4 left-4 text-white text-2xl"
          />
        ) : (
          <ImCross
            onClick={() => setMenu(!menu)}
            className="absolute top-4 left-4 text-white text-2xl"
          />
        )}
      </div>
    </section>
  );
};

export default Navbar;
