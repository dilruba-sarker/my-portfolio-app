import React from 'react';

import { Link } from 'react-router';

export default function Project3() {
  return (
    <div className="p-4 w-full mx-auto text-center mt-8">
        <div className='text-center mt-4'><h1 className='text-4xl mb-8 font-bold text-blue-600'>OUR PROJETS FEATURES</h1></div>
    <div className='w-6/10 mx-auto'>  <h1 className="text-4xl font-bold mb-4">Social Development Events Platform</h1>
      <p className='mb-8'>Social Development Events Platform, responsive website It is designed to be intuitive, visually appealing, and efficient across all devices—mobile, tablet, and desktop. This project emphasizes clean UI/UX with secure backend architecture using Firebase and MongoDB.</p></div>
       

 <div className="w-full flex justify-center mb-6">
        <iframe
          className="w-full max-w-3xl aspect-video"
          src="https://www.youtube.com/embed/uNZCK_9O_uY?start=32"
          title="Social Development Events Platform Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> 


       <Link to="/details3">
                          <button className="btn bg-black text-white mt-6">See Details</button>
                      </Link>
    </div>
  );
}
