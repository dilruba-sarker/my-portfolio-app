import React from 'react';
// import myVideo from '../assets/0810.mp4'; // Adjust path based on location
import { Link } from 'react-router';

export default function Project3() {
  return (
    <div className="p-4 w-full mx-auto text-center mt-8">
        <div className='text-center mt-4'><h1 className='text-4xl mb-8 font-bold text-blue-600'>OUR PROJETS FEATURES</h1></div>
    <div className='w-3xl mx-auto'>  <h1 className="text-4xl font-bold mb-4">Social Development Events Platform</h1>
      <p className='mb-8'>Social Development Events Platform, responsive website It is designed to be intuitive, visually appealing, and efficient across all devices—mobile, tablet, and desktop. This project emphasizes clean UI/UX with secure backend architecture using Firebase and MongoDB.</p></div>
      {/* <video
        src={myVideo}
        controls
        autoPlay
        loop
        muted
        className="w-10/14 mx-auto rounded-lg shadow-lg"
      /> */}

       <Link to="/details3">
                          <button className="btn bg-black text-white mt-6">See Details</button>
                      </Link>
    </div>
  );
}
