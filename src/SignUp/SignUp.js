import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.config';
const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate();
    if (user || gUser) {
        console.log(user || gUser);
    }
    if(loading || gLoading || updating){
        return <button className="btn btn-square loading"></button>
    }
    let signError;
    if(error || gError || updateError){
        signError = <p className='text-red-500'>{error?.message} {gError?.message} {updateError?.message}</p>
    }
    const onSubmit = async(data) => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name });
        alert('Updated profile');
        navigate('/appointment')
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Sign Up</h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", { 
                                    required:{
                                        value:true,
                                        message:'Write Your Name'
                                    }
                                 })}
                                />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", { 
                                    required:{
                                        value:true,
                                        message:'Email Address Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                                      }
                                 })}
                                />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", { 
                                    required:{
                                        value:true,
                                        message:'Email Address Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'You must write atleast 6 character' // JS only: <p>error message</p> TS only support string
                                      }
                                 })}
                                />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>
                        {signError}
                        <input className='btn btn-primary w-full' type="submit" value='Login' />
                    </form>
                    <p><small>Already Have an Account? <Link className='text-primary' to='/login'>Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">SIGNIN_WITH_GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;