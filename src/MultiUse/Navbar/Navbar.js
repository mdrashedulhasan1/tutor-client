import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className=''>
            <div className="navbar bg-primary text-primary-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-primary dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className='text-xl font-medium'>Home</Link></li>
                            <li><Link to='/about' className='text-xl font-medium'>About</Link></li>
                            <li><Link to='/services' className='text-xl font-medium'>Service</Link></li>
                            <li><Link to='/blogs' className='text-xl font-medium'>Blogs</Link></li>
                            <li><Link to='/reviews' className='text-xl font-medium'>Reviews</Link></li>
                            <li><Link to='/contact' className='text-xl font-medium'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold italic">Tutor</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/' className='text-xl font-medium'>Home</Link></li>
                        <li><Link to='/about' className='text-xl font-medium'>About</Link></li>
                        <li><Link to='/services' className='text-xl font-medium'>Service</Link></li>
                        <li><Link to='/blogs' className='text-xl font-medium'>Blogs</Link></li>
                        <li><Link to='/reviews' className='text-xl font-medium'>Reviews</Link></li>
                        <li><Link to='/contact' className='text-xl font-medium'>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?<a onClick={logout} className="btn bg-red-500">Sign Out</a>:<Link to="/login" className="btn bg-cyan-500">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;