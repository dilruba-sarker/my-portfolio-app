import React from 'react'
import pic from "../assets/social.png"



import { Link } from 'react-router';

const Project5 = () => {
    return (
        <div className='mt-8 text-center'>
            <h1 className='text-4xl font-bold mb-6 text-blue-800'>My Recent Projects</h1>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4">
            <div className="w-full md:w-1/2">
               
                    
          <img src={pic} alt=""  />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                   Social Forum
                </h1>
                <p className="text-gray-600">
                   An interactive MERN stack-based forum where users can post, comment, vote, and engage in topic-based discussions. Designed with recruiters in mind, this forum emphasizes a clean, scalable structure, accessibility, performance, and responsiveness.
                </p>

                <div className='flex mt-1 -mb-2'>
                   <button className="mr-1 px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">html</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">tailwind css</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">react js</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">node js</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">mongodb</button>
                </div>
                
                <Link to='/details4'> <button className='btn bg-black text-white mt-6'>Details</button></Link>

            </div>
        </div>
        </div>
    );
};

export default Project5;
