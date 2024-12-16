import React, { useContext } from 'react'
import { AuthContext } from '../Root/Authprovider';
import Lottie from 'lottie-react';
import loginLoti from '../../../public/loginLotti.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

  const location = useLocation();
  const navigate = useNavigate()
  const { handleLogin,signOutUser} = useContext(AuthContext)

    function formLogin(e){
        e.preventDefault(); // Prevent the default form submission

        // Retrieve form values
        const email = e.target.email.value;
        const password = e.target.pass.value;
        const myData = { email,  password }

        console.log(myData);

        handleLogin(email,password)
        .then((userCredential) => {
       
          const user = userCredential.user;
          console.log(user);
          navigate(location?.state || '/')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
        });
      
    }


    

  return (
    <div className="card bg-base-100 w-9/12 mx-auto shadow-2xl my-8">
      <div className='w-60 mx-auto'>
           <Lottie animationData={loginLoti}></Lottie>
      </div>
    
      <form className="card-body" onSubmit={formLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary my-2" >Login</button>
        </div>
        <p className='text-sm font-semibold text-center'>Do not have an Account? <Link to={'/register'} className='text-lg font-bold text-red-500'>Register</Link></p>
      </form>
    </div>
  )
}

export default Login