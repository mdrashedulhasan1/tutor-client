import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const allBlogs = [
        {
            id: 1,
            name: "5 Study Habits Every Successful Student Should Adopt",
            description: "Provide tips and strategies for effective studying, including time management techniques, note-taking methods, and creating a conducive study environment.",
            img: "https://t3.ftcdn.net/jpg/02/65/18/30/240_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
        },
        {
            id: 2,
            name: "How to Overcome Math Anxiety and Excel in Mathematics",
            description: "Address the common issue of math anxiety and offer practical advice for students to build confidence, overcome their fears, and develop a positive mindset towards math.",
            img: "https://t4.ftcdn.net/jpg/01/13/31/65/240_F_113316547_q9wiDxadvidz5UvKITGbJMvzqrDw45Kl.jpg",
        },
        {
            id: 3,
            name: "The Importance of Setting Realistic Goals for Academic Success",
            description: "Discuss the significance of setting achievable goals for academic progress and provide guidance on how students can set SMART (Specific, Measurable, Attainable, Relevant, Time-bound) goals to stay motivated and focused",
            img: "https://t4.ftcdn.net/jpg/03/18/40/09/240_F_318400976_8xA8EmS76mI0wZKP9gF0H9h4DDYO7CI6.jpg",
        },
        {
            id: 4,
            name: "The Benefits of Online Tutoring: Why Virtual Learning is Here to Stay",
            description: "Highlight the advantages of online tutoring, such as flexibility, personalized attention, and access to a global network of tutors. Explain how online platforms can enhance the learning experience for students",
            img: "https://t3.ftcdn.net/jpg/01/04/93/90/240_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg"
        },
        {
            id: 5,
            name: "Effective Strategies for Preparing for Standardized Tests",
            description: "Offer valuable tips for students preparing for standardized tests like the SAT, ACT, or TOEFL. Discuss study plans, test-taking strategies, and resources available to help students achieve their target scores.",
            img: "https://t3.ftcdn.net/jpg/03/81/38/78/240_F_381387894_rtSaD0i9GRwm4IcHEiLKtXDlwOF2zhsh.jpg",
        },
        {
            id: 6,
            name: "The Power of Mind Mapping: Boosting Creativity and Enhancing Learning",
            description: "Introduce the concept of mind mapping and explain how it can be used as a powerful tool for organizing thoughts, generating ideas, and improving memory retention. Provide examples and practical applications for students.",
            img: "https://t4.ftcdn.net/jpg/00/60/94/25/240_F_60942587_v6eMKqUitJ3PXptnhTfEVSlWe5Oq0bWm.jpg",
        }
    ]
    return (
        <div className='mt-10'>
            <h1 className='text-5xl font-bold'>Blogs</h1>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20'>
                {
                    allBlogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;