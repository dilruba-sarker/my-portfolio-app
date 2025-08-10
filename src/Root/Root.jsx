import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';

const Root = () => {
    return (
        <div className=' '>
            <Navbar></Navbar>
     <div className='mt-20'> <Outlet></Outlet></div>
        </div>
    );
};

export default Root;


