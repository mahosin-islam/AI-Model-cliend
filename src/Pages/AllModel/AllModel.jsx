import React from 'react';
import { useLocation } from 'react-router';

const AllModel = () => {
    const location=useLocation()
    console.log(location)
    return (
        <div>
            <h2>Allmodel pages</h2>
        </div>
    );
};

export default AllModel;