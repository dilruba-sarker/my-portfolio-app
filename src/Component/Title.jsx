import React from "react";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/logo.png";
import pic from "../assets/dilruba-removebg-preview.png";

const Title = () => {
  return (
    <div className="flex gap-8 flex-col md:flex-row items-center">
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
      </div>
    </div>
  );
};

export default Title;
