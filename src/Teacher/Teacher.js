import React from 'react';

const Teacher = ({ teacher }) => {
    return (
        <div className='bg-cyan-400 rounded-md p-10'>
            <div className="avatar online">
                <div className="w-24 rounded-full">
                    <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjUoqalhcLaWMc3ZYKDiTr9DFFzyW8iIp0LVPwWnPOFo_H8JKOFhS1iuOuBYFaiXu2lk&usqp=CAU`} alt='' />
                </div>
            </div>
            <h1 className='text-2xl font-medium'>{teacher.name}</h1>
            <p className='text-xl font-normal break-all'>{teacher.description}</p>
        </div>
    );
};

export default Teacher;