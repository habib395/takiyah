import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Items from "../Items";
import Slider from "../Slider";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Item from "../Item";
import Banner from "./Banner";
const Home = () => {
  const items = useLoaderData()
  const [taqiyah, setTaqiyah] = useState([]);
  const [darkMode, setDarkMode] = useState(false)

  const enableDarkMode = () =>{
    document.documentElement.classList.add("dark")
    setDarkMode(false)
  }
  const enableLightMode = () => {
    document.documentElement.classList.remove("dark")
    setDarkMode(true)
  }
 
  useEffect(() => {
    fetch("./taqiyah.json")
      .then((res) => res.json())
      .then((data) => setTaqiyah(data));
  }, []);


  return (
    <div  className="dark:bg-gray-900 dark:text-white">
      {/* slider section start here */}
      <Slider></Slider>

    {/* dark theme related banner section */}
      {/* <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/kHGm9SG/taqiyah-one.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Taqiyah World</h1>
            <p className="mb-5">
             Best Takiqah Forever.
            </p>
           <div className="flex justify-center gap-2">
           <button onClick={enableLightMode} className="btn">LIGHT MODE</button>
           <button onClick={enableDarkMode} className="btn bg-blue-400">DARK MODE</button>
           </div>
          </div>
        </div>
      </div> */}
      {/* hero banner section  end here */}
      {/* items section start here */}
      <div className='sm:grid sm:grid-cols-5 gap-4 py-5'>
        <div className='col-span-1 overflow-y-auto max-h-[500px]'>
            <Items items={items}></Items>
        </div>
        <div className='col-span-4 grid grid-cols-4 gap-3'>
            <Outlet></Outlet>
        </div>
       </div>
      {/* items section end here */}
      </div>
    // </div>
  );
};

export default Home;
