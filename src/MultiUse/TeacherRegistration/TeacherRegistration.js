import React from 'react';
import { Link } from 'react-router-dom';

const TeacherRegistration = () => {
    return (
        <div className='p-20 bg-sky-300 rounded-lg'>
            <Link to='/teacher-registration' className="btn btn-ghost text-xl font-bold">Teacher Registration</Link>
        </div>
    );
};

export default TeacherRegistration;