import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Bannar from '../Pages/Home/Bannar';

const Root = () => {
    return (
        <div>
            <Navbar ></Navbar>
            <div className='mt-17  bg-gray-200'>
          
            <Bannar></Bannar>
            </div>
            <div className=' mb-5  min-h-[calc(100vh-200px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;