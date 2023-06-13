import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
const TeacherRegistration = () => {
    let navigate = useNavigate();
    // console.log(image);
    const handelAddTeacher = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const teacherRegistration = { name, description};
        fetch('http://localhost:5000/registerTeacher', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teacherRegistration)
        })
        // navigate("/jobs");
        navigate("/teachers");
    }
    return (
        <div>
            <form onSubmit={handelAddTeacher} className='bg-cyan-400 mt-10 py-10'>
            <h1 className='text-2xl font-semibold'>Please Registration all Teacher</h1>
            <input type="text" name='name' placeholder="write your name" required className="mt-2 input input-bordered w-1/2" /><br />
            <textarea name='description' required className="mt-2 textarea textarea-bordered w-1/2" placeholder="write your description"></textarea><br />
            <button type='submit' className='mt-2 btn btn-primary'>Submit</button>
        </form>
        <div>
            
        </div>
        </div>
    );
};

export default TeacherRegistration;