import React from "react";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/logo.png";
import pic from "../assets/dilruba-removebg-preview.png";
import { Link } from "react-router";
import { GoArrowUpRight, GoCrossReference } from "react-icons/go";
import { MdDownloadForOffline } from "react-icons/md";
import SocialLinks from "./SocialLinks";


const Title = () => {
  return (
    <div className="flex gap-8 mt-20 flex-col md:flex-row items-center">
      <div>
        <img src={pic} alt="Profile" />
      </div>
      <div>
        <div className="flex gap-4 items-center">
          <img className="w-6 h-6" src={logo} alt="Logo" />
          <h1 className="text-xl font-bold">Hey There!</h1>
        </div>

        <h2 className="text-5xl font-medium mt-2">
          
          <span className="text-blue-600">
            <Typewriter
              words={[" I'm Dilruba Sarker"]}
             loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
       <p className="text-gray-500 mt-2">I am a front-end developer skilled in JavaScript, Tailwind CSS, React, and Node.js. <br /> I focus on creating efficient, responsive, and visually appealing web applications.</p>
{/* */}


<div className="flex items-center gap-8">
<Link to='/contract-me'>

<button
  className="relative mt-12 px-6 py-3 bg-black text-white font-semibold rounded-md overflow-hidden
    transform origin-bottom-left transition-transform duration-600 ease-out hover:scale-120 group"
>
  {/* Background slide */}
  <span
    className="absolute inset-0 bg-blue-600 transform translate-x-full transition-transform duration-600 ease-out group-hover:translate-x-0"
    style={{ zIndex: 0 }}
  ></span>

  {/* Button text */}
  <div className="flex gap-1 items-center">
    <span className="relative z-10">Contract Me</span>
    
    {/* Animated icon */}
    <span
      className="
        relative z-10
        opacity-0
        translate-y-4
        group-hover:opacity-100
        group-hover:-translate-y-1
        transition
        duration-600
        ease-out
        font-extrabold
        text-xl
        inline-block
      "
    >
      <GoArrowUpRight />
    </span>
  </div>
</button>

</Link>

<Link>
<button className="btn mt-12 px-6 py-5.5 bg-black text-white font-semibold rounded-md ">Resume
     <p className='text-2xl'><MdDownloadForOffline /></p>
</button>
</Link>
</div>
{/*  */}
<SocialLinks></SocialLinks>
      </div>
    </div>
  );
};

export default Title;
