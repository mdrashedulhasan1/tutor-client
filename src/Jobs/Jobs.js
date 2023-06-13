import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/postJob')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    // const allJobs = [
    //     {
    //         id: 1,
    //         name: "Atik-1",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //     },
    //     {
    //         id: 2,
    //         name: "Atik-2",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //     },
    //     {
    //         id: 3,
    //         name: "Atik-3",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //     },
    //     {
    //         id: 4,
    //         name: "Jakir-1",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //     },
    //     {
    //         id: 5,
    //         name: "Jakir-2",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //     },
    //     {
    //         id: 6,
    //         name: "Jakir-3",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //     }
    // ]
    return (
           <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-20'>
                {
                    jobs.map(job => <Job key={job._id} job={job}></Job>)
                }
            </div>
    );
};

export default Jobs;