import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-5   min-h-[calc(100vh-200px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;