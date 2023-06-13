import React from 'react';
import { Link } from 'react-router-dom';
const PostJob = () => {
    return (
        <div className='p-20 bg-green-300 rounded-lg'>
            <Link to='/post-job' className="btn btn-ghost text-xl font-bold">Post Job</Link>
        </div>
    );
};

export default PostJob;