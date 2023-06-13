import React from 'react';
import { Link } from 'react-router-dom';

const AllTeacher = () => {
    return (
        <div>
            <div className='p-20 bg-teal-300 rounded-lg'>
            <Link to='/teachers' className="btn btn-ghost text-xl font-bold">All Teachers</Link>
        </div>
        </div>
    );
};

export default AllTeacher;