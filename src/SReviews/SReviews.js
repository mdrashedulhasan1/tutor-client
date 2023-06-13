import React, { useEffect, useState } from 'react';
import AllReviews from '../AllReviews/AllReviews';

const SReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/studentReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-20'>
                {
                    reviews.filter(review => review.rating === '5').map(review => <AllReviews key={review._id} review={review}></AllReviews>)
                }
                {
                    reviews.filter(review => review.rating === '4').map(review => <AllReviews key={review._id} review={review}></AllReviews>)
                }
                {
                    reviews.filter(review => review.rating === '3').map(review => <AllReviews key={review._id} review={review}></AllReviews>)
                }
                {
                    reviews.filter(review => review.rating === '2').map(review => <AllReviews key={review._id} review={review}></AllReviews>)
                }
                {
                    reviews.filter(review => review.rating === '1').map(review => <AllReviews key={review._id} review={review}></AllReviews>)
                }
        </div>
    );
};

export default SReviews;