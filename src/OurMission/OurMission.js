import React from 'react';

const OurMission = () => {
    const missionImage = {
        img: "https://i0.wp.com/www.thesocialemotionalteacher.com/wp-content/uploads/2021/04/AdobeStock_79744437.jpeg?resize=640%2C427&ssl=1",
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                {/* <img className='rounded-lg' src={missionImage.img} alt='' /> */}
                <div style={{ display: 'inline' }} className='text-9xl italic font-semibold border-red-300 mr-20'>
                    Picture
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-left">Our Mission</h1>
                    <p className="py-5 text-left text-justify text-xl">
                        Our mission is to empower students to become lifelong learners who are equipped with the knowledge, skills, and confidence to thrive in an ever-changing world. We are committed to making a positive impact on the lives of students and helping them unlock their full potential through personalized tutoring and educational support. <br />
                        We value collaboration and encourage students to actively participate in their own learning journey. We believe that education is a partnership between tutors, students, and parents, and we actively promote open communication and regular feedback to ensure the best possible learning outcomes.
                    </p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default OurMission;