import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateReview = () => {
    let navigate = useNavigate();
    const handelAddReview = (event) => {
        event.preventDefault();
        const sName = event.target.sName.value;
        const tName = event.target.tName.value;
        const rating = event.target.rating.value;
        const description = event.target.description.value;
        const studentReview = { sName, tName , rating, description};
        fetch('http://localhost:5000/studentReviews', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentReview)
        })
        navigate("/reviews");
        console.log(studentReview);
    }
    return (
        <form onSubmit={handelAddReview} className='bg-cyan-400 mt-10 py-10'>
            <h1 className='text-2xl font-medium'>Please Give Your Review</h1>
            <input type="text" name='sName' placeholder="write your name" required className="mt-2 input input-bordered w-1/2" /><br />
            <input type="text" name='tName' placeholder="write your teacher name" required className="mt-2 input input-bordered w-1/2" /><br />
            <input type="text" name='rating' placeholder="rating out of 5" required className="mt-2 input input-bordered w-1/2" /><br />
            <textarea name='description' required className="mt-2 textarea textarea-bordered w-1/2" placeholder="write your opinion"></textarea><br />
            <button type='submit' className='mt-2 btn btn-primary'>Submit</button>
        </form>
    );
};

export default CreateReview;