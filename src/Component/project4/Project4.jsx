import React from 'react'
import pic from "../../assets/social.png"



import { Link } from 'react-router';

const Project4 = () => {
    return (
        <div>
            
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
                
                <Link to='/details4'> <button className='btn bg-black text-white mt-6'>Details</button></Link>

            </div>
        </div>
        </div>
    );
};

export default Project4;
