import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const AllPostJob = () => {
    let navigate = useNavigate();
    
    const handelAddJob = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const description = event.target.description.value;
        const postJob = { name, email, description };
        fetch('http://localhost:5000/postJob', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postJob)
        })
        navigate("/jobs");
    }
    return (
        <form onSubmit={handelAddJob} className='bg-indigo-400 mt-10 py-10'>
            <h1 className='text-2xl font-semibold'>Please Post Your Job</h1>
            <input type="text" name='name' placeholder="write your name" required className="mt-1 input input-bordered w-1/2" /><br />
            <input type="email" name='email' placeholder="write your email" required className="mt-1 input input-bordered w-1/2" /><br />
            <textarea name='description' className="mt-1 textarea textarea-bordered w-1/2" required placeholder="write your description"></textarea><br />
            <button type='submit' className='btn btn-accent'>Submit</button>
        </form>

    );
};

export default AllPostJob;