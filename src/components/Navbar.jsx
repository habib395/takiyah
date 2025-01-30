import React, { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaIdCardClip } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import {
  FaHeart,
  FaRedhat,
  FaSearch,
  FaShoppingCart,
  FaUnlock,
  FaUserPlus,
} from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../App.css";
import Item from "./Item";

const Navbar = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("../Category.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // console.log(items);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div
        className={`${
          location.pathname === "/"
            ? "sm:navbar sm:w-11/12 mx-auto active px-2 sm:px-10"
            : "sm:navbar bg-transparent w-11/12 mx-auto"
        }`}
      >
        <div className="sm:navbar-start flex items-center justify-center gap-2 py-2">
          <div className="text-4xl text-blue-400">
          <FaIdCardClip />
          </div>
          <div className="text-2xl font-semibold">
          <NavLink
            className={`${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Taqiyah
          </NavLink>
          </div>
        </div>
        <div className="navbar-center mx-3">
          <div className="join">
            <input
              className="input bg-transparent dark:border-white input-bordered join-item"
              // name="search"
              // onChange={e => setSearch(e.target.value)}
              placeholder="Search For..."
            />
            <button className="btn join-item text-white bg-blue-300">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="sm:navbar-end flex justify-center my-2 gap-2">
          <div className="flex items-center">
            {/* make number */}
            <div className="indicator">
              <span className="indicator-item badge bg-blue-400">0</span>
              <button className="btn btn-sm bg-white border-0">
                <CiHeart />
              </button>
            </div>
            <div className="sm:p-1 rounded-full ">
              <p>Wishlist</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="indicator">
              <span className="indicator-item badge bg-blue-400">0</span>
              <button className="btn btn-sm bg-white border-0">
                {" "}
                <MdOutlineShoppingCart />
              </button>
            </div>

            <div className="sm:p-1 rounded-full ">
              <p>Cart</p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 mr-2  text-blue-400 border-0 rounded shadow"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <div>
            <Link to="/signIn">
              <button className="btn bg-blue-400">SignIn</button>
            </Link>
          </div>
         
        </div>
      </div>
      {/* second navbar start */}
      <div className="mt-3 px-2 sm:px-10 border flex justify-between items-center">
        <div>
          <ul className="flex justify-evenly items-center font-semibold py-3">
            <li>
              <NavLink
                className={`${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Item items={items}></Item>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-2xl">
            <TfiHeadphoneAlt />
          </div>
          <div>
            <h2 className="text-lg text-blue-400">1900-888</h2>
            <h2 className="text-sm">24/7 Support Center</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
