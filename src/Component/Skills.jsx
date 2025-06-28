import React from 'react';
import pic1 from '../assets/1-removebg-preview.png'
import pic2 from '../assets/2-removebg-preview.png'
import pic3 from '../assets/3-removebg-preview.png'
import pic4 from '../assets/4-removebg-preview.png'
import pic5 from '../assets/5-removebg-preview.png'
import pic6 from '../assets/6-removebg-preview.png'
import pic7 from '../assets/7-removebg-preview.png'
import Marquee from "react-fast-marquee";
const Skills = () => {
    return (
        <div className='mt-10'>

            
            <Marquee>

   
    <img src={pic1} alt="" />
    <img src={pic2} alt="" />
    <img src={pic3} alt="" />
    <img src={pic4} alt="" />
    <img src={pic5} alt="" />
    <img src={pic6} alt="" />
    <img src={pic7} alt="" />
   

</Marquee>
        </div>
    );
};

export default Skills;