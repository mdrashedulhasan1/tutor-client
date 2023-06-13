import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='post-job' className="link link-hover">Post Job</Link>
                    <Link to='/jobs' className="link link-hover">Get Job</Link>
                    <Link to='/teacher-registration' className="link link-hover">Teacher Registration</Link>
                    <Link className="link link-hover">student advisor</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/about' className="link link-hover">About us</Link>
                    <Link to='/services' className="link link-hover">Service</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;