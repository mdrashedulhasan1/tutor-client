import React from 'react';

const AllReviews = ({ review }) => {
    const rating = review.rating;
    console.log(rating)
    return (
        <div>
            <div className='bg-cyan-400 rounded-md p-10'>
                <h1 className='text-2xl font-medium'>Student Name: {review.sName}</h1>
                <h1 className='text-2xl font-medium'>Teacher Name: {review.tName}</h1>
                <h1 className='text-2xl font-medium'>Rating out of 5: {review.rating}</h1>
                <p className='text-xl font-normal break-all'>Opinion: {review.description}</p>
            </div>
        </div>
    );
};

export default AllReviews;