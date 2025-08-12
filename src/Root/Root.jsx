// import React from 'react';
// import { Outlet } from 'react-router';
// import Navbar from '../Component/Navbar';
// import Footer from '../Component/Footer';

// const Root = () => {
//     return (
//         <div>
//             <Navbar></Navbar>
//      <div className='mt-20'> <Outlet></Outlet></div>
       
//         <Footer></Footer> 
//         </div>
//     );
// };

// export default Root;


import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import ScrollToTopButton from '../Component/ScrollToTopButton';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-20'>
                <Outlet />
            </div>
            <Footer /> 
            <ScrollToTopButton />
        </div>
    );
};

export default Root;
