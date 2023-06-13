import React from 'react';
import AllTeacher from '../AllTeacher/AllTeacher';
import GetJob from '../MultiUse/GetJob/GetJob';
import PostJob from '../MultiUse/PostJob/PostJob';
import TeacherRegistration from '../MultiUse/TeacherRegistration/TeacherRegistration';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import StudentReview from '../MultiUse/StudentReview/StudentReview';
const Service = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='grid justify-items-center'>
            <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    user?.email.indexOf('@gmail.com') !== -1 ? <PostJob></PostJob> : ''
                }
                {
                    user?.email.indexOf('@gmail.com') !== -1 ? <StudentReview></StudentReview> : ''
                }
                {
                    user?.email.indexOf('@mbstu.ac.bd') !== -1 ? <GetJob></GetJob> : ''
                }
                {
                    user?.email.indexOf('@mbstu.ac.bd') !== -1 ? <TeacherRegistration></TeacherRegistration> : ''
                }
                <AllTeacher></AllTeacher>
            </div>
        </div>
    );
};

export default Service;