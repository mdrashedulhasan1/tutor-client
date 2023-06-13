import React from 'react';

const Contact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
            <div className='border-2 border-gray-400 m-10 p-10 shadow-xl rounded-lg'>
                <h1 className='text-xl font-semibold'>Contact</h1>
                <hr className='w-1/2 mx-auto' />
                <h4>Address:</h4>
                <h4>Tangail, Dhaka</h4>
                <hr className='w-1/3 mx-auto' />
                <h4>Phone:</h4>
                <h4>017********</h4>
                <hr className='w-1/3 mx-auto' />
                <h4>Email:</h4>
                <h4>tutor@gmail.com</h4>
            </div>
            <div className='border-2 border-gray-400 m-10 p-10 shadow-xl rounded-lg'>
                <h1 className='text-xl font-semibold'>Feedback</h1>
                <input type="text" placeholder="write your name" className="mt-1 input input-bordered w-1/2" /><br />
                <input type="email" placeholder="write your email" className="mt-1 input input-bordered w-1/2" /><br />
                <textarea className="mt-1 textarea textarea-bordered w-1/2" placeholder="write your feedback"></textarea><br />
                <button type='button' className='btn btn-accent'>Submit</button>
            </div>
        </div>
    );
};

export default Contact;