import React from 'react';
import JobBook from '../JobBook/JobBook';

const Job = ({ job }) => {
    return (
        <div className='bg-cyan-400 rounded-md p-10'>
                <h1 name='name' className='text-2xl font-medium'>{job?.name}</h1>
                <p className='text-xl font-normal'>{job?.email}</p>
                <p className='text-xl font-normal'>{job?.description}</p>
                <label type='submit' htmlFor="my-modal-3" className="btn mt-2">Confirm</label>
            {
                <JobBook key={job._id} job={job}></JobBook>
            }
        </div>
    );
};

export default Job;