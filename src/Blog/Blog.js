import React from 'react';

const Blog = ({ blog }) => {
    return (
        <div className="card drop-shadow-xl">
            <figure className="px-10 pt-10">
                <img className='rounded-xl' src={blog.img} alt='' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{blog.name}</h2>
                <p className='text-gray-600'>{blog.description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;