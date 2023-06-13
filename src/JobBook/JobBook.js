import React from 'react';

const JobBook = ({job}) => {
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations!</h3>
                    <h4>Your Student:</h4>
                    <h4>{job.name}</h4>
                    <p className="py-4">Successfully Book!</p>
                </div>
            </div>
        </>
    );
};

export default JobBook;