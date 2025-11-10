import React from 'react';
import { useLocation } from 'react-router';

const Home = () => {
    const locaiton =useLocation()
    console.log(locaiton)
    return (
        <div>
            <h2>Home pages</h2>
           
        </div>
    );
};

export default Home;