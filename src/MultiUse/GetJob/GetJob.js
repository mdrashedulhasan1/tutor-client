import React from 'react';
import { Link } from 'react-router-dom';

const GetJob = () => {
    return (
        <div className='p-20 bg-teal-300 rounded-lg'>
            <Link to='/jobs' className="btn btn-ghost text-xl font-bold">Get Job</Link>
        </div>
    );
};

export default GetJob;