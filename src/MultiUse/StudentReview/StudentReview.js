import React from 'react';
import { Link } from 'react-router-dom';

const StudentReview = () => {
    return (
        <div className='p-20 bg-blue-300 rounded-lg'>
            <Link to='/create-review' className="btn btn-ghost text-xl font-bold">Review</Link>
        </div>
    );
};

export default StudentReview;