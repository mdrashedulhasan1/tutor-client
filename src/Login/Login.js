import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='h-1/3 w-1/2 bg-sky-400 flex justify-center items-center drop-shadow-xl rounded-lg'>
                <div>
                    <Link to='/student-login' className="btn btn-outline btn-primary text-xl font-bold">Gurdian Login</Link><br /><br />
                    <Link to='/teacher-login' className="btn btn-outline btn-primary text-xl font-bold">Teacher Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;