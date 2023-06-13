import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/registerTeacher')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    // const allTeachers = [
    //     {
    //         id: 1,
    //         name: "Atik-1",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //         img:"https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
    //     },
    //     {
    //         id: 2,
    //         name: "Atik-2",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //         img:"https://t4.ftcdn.net/jpg/01/13/31/65/240_F_113316547_q9wiDxadvidz5UvKITGbJMvzqrDw45Kl.jpg",
    //     },
    //     {
    //         id: 3,
    //         name: "Atik-3",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //         img:"https://t4.ftcdn.net/jpg/03/18/40/09/240_F_318400976_8xA8EmS76mI0wZKP9gF0H9h4DDYO7CI6.jpg",
    //     },
    //     {
    //         id: 4,
    //         name: "Jakir-1",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //         img:"https://t3.ftcdn.net/jpg/01/04/93/90/240_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg"
    //     },
    //     {
    //         id: 5,
    //         name: "Jakir-2",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //         img:"https://t3.ftcdn.net/jpg/03/81/38/78/240_F_381387894_rtSaD0i9GRwm4IcHEiLKtXDlwOF2zhsh.jpg",
    //     },
    //     {
    //         id: 6,
    //         name: "Jakir-3",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ea optio officia beatae modi.",
    //         img:"https://t4.ftcdn.net/jpg/00/60/94/25/240_F_60942587_v6eMKqUitJ3PXptnhTfEVSlWe5Oq0bWm.jpg",
    //     }
    // ]
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-20'>
            {
                teachers.map(teacher => <Teacher key={teacher._id} teacher={teacher}></Teacher>)
            }
        </div>
    );
};

export default Teachers;