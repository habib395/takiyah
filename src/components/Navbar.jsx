import React, { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaHeart, FaRedhat, FaSearch, FaShoppingCart, FaUnlock, FaUserPlus } from "react-icons/fa";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const location = useLocation();
  // const [products, setProducts] = useState([])
  // console.log(products)
  // const [search, setSearch] = useState("")

  // useEffect(()=>{
  //   const fetchAllItems = async() =>{
  //     try{
  //       const { data } = await fetch("./taqiyah.json")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //       setProducts(data)
  //     }catch(error){
  //       console.log('Error fetching search queries:', error)
  //     }
  //   }
  //   fetchAllItems()
  // }, [search])

  useEffect(() => {
    // console.log(location.pathname)
  }, [location]);
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div
        className={`${
          location.pathname === "/"
            ? "sm:navbar sm:w-11/12 mx-auto active px-2 sm:px-10"
            : "sm:navbar bg-transparent w-11/12 mx-auto"
        }`}
      >
        <div className="sm:navbar-start flex justify-center gap-2 py-2">
          <div className="text-4xl">
            <FaRedhat />
          </div>
          <NavLink
            className={`${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Taqiyah 
          </NavLink>
        </div>
        <div className="navbar-center mx-3">
          <div className="join">
            <input
              className="input bg-transparent dark:border-white input-bordered join-item"
              // name="search"
              // onChange={e => setSearch(e.target.value)}
              placeholder="Search For..."
            />
            <button className="btn join-item text-white bg-blue-300"><FaSearch /></button>
          </div>
        </div>
        
        <div className="sm:navbar-end flex justify-center gap-2 sm:gap-4 my-2">
          <div className="badge p-3 sm:p-5 bg-blue-300 text-white gap-2">
            <FaUserPlus />
            Login
          </div>
          <div className="badge p-3 sm:p-5 bg-blue-950 text-white gap-2">
            <FaUnlock />
            Registration
          </div>
          <div className="badge p-3 sm:p-5 bg-yellow-300 text-white gap-3">
          <FaShoppingCart />
            <div className="border sm:p-1 rounded-full bg-white">
                <p className="text-yellow-500">0</p>
            </div>
          </div>
        </div>
      </div>
      {/* second navbar start */}
      <div className=" bg-blue-300  mt-3 px-2 sm:px-10">
          <ul className="flex justify-evenly items-center text-white py-3">
            <li><NavLink className={`${location.pathname === '/'? 'active': ''}`} to='/'>Home</NavLink></li>
            <li><NavLink className="ml-3" to='/statistic'>Statistic</NavLink></li>
            <li><NavLink className="ml-3" to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink className="ml-3" to='/feedback'>Feedback</NavLink></li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
