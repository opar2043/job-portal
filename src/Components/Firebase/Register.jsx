import { useState, useContext } from "react";
import { AuthContext } from "../Root/Authprovider";
import Lottie from "lottie-react";
import dataLotti from '../../../public/Animation - 1734087954453.json'
import { Link } from "react-router-dom";

const Register = () => {

    const { handleRegister } = useContext(AuthContext); // Correctly use useContext instead of useState

    function formSubmit(e) {
        e.preventDefault(); // Prevent the default form submission

        // Retrieve form values
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.pass.value;
        const myData = { email, name, password };
        console.log(myData);
        e.target.reset();

        handleRegister(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                alert('User account created successfully');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                alert(`Error: ${errorMessage}`);
            });
    }

    return (
        <div>
            <div className="card bg-base-100 w-3/4 mx-auto shadow-2xl my-10">
                 <div className="w-60 mx-auto">
                 <Lottie animationData={dataLotti}></Lottie>
                 </div>

                <form className="card-body" onSubmit={formSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-info">Register</button>
                    </div>
                    <p className='text-sm font-semibold text-center'>Al-Ready have an Account? <Link to={'/login'} className='text-lg font-bold text-green-500'>Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Register;
