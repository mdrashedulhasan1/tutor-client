import React from 'react';
import AllTeacher from '../../AllTeacher/AllTeacher';
import Blogs from '../../Blogs/Blogs';
import mainBg from '../../Images/main-bg.jpg'
import OurMission from '../../OurMission/OurMission';
import GetJob from '../GetJob/GetJob';
import PostJob from '../PostJob/PostJob';
import TeacherRegistration from '../TeacherRegistration/TeacherRegistration';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';
import Service from '../../Service/Service';
const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    const bgImage = {
        backgroundImage: `url(${mainBg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        boxShadow: "2px 3px 5px gray",
        height:'600px',
    }
    return (
        <div>
            <div style={bgImage} className='bg-violet-500'>
            </div>
            {/* <div style={{ marginTop: '-100px' }} className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    user?.email.indexOf('@gmail.com') !== -1 ? <PostJob></PostJob> : ''
                }
                {
                    user?.email.indexOf('@mbstu.ac.bd') !== -1 ? <GetJob></GetJob> : ''
                }
                {
                    user?.email.indexOf('@mbstu.ac.bd') !== -1 ? <TeacherRegistration></TeacherRegistration> : ''
                }
                <AllTeacher></AllTeacher>
            </div> */}
            <div style={{ marginTop: '-125px' }}>
                {
                    user ? <Service></Service> : ''
                }
            </div>
            <div>
                <OurMission></OurMission>
                <Blogs></Blogs>
            </div>
        </div>

    );
};

export default Home;