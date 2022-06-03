import React, { useState } from 'react';

const Login = () => {

    const [student, setStudent] = useState({
        email : "",
        password : ""
    });

    //Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
           
        setStudent({...student, [name] : value})
        
    }


    //Handle Login
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = student;

        try{
            const res = await fetch('/login', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },

                body : JSON.stringify({
                    email,password
                })
            });

            if(res.status === 400 || !res) {
                window.alert("Invalid Credentials!")
            }else {
                window.alert("Login Successfull!");
                window.location.reload();
            }
            
        }catch(error) {
            console.log(error);
        }
    }


    return (

        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column 
                        align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Welcome Back!</h1>
                        <p className="lead text-center">Enter Your Credentials to Login </p>
                        <h5 className="mb-4">OR</h5>
                        <a href="/register" className="btn btn-outline-light 
                        rounded-pill pb-2 w-50">Register</a>
                    </div>

                    <div className="col-md-6 p-5 ">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1"
                                    className="form-label">Email address</label>
                                <input type="email" required
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" 
                                    name="email"
                                    value={student.email}
                                    onChange={handleChange}
                                    />
                                <div id="emailHelp"
                                    className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1"
                                    className="form-label">Password</label>
                                <input type="password" required
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={student.password}
                                    onChange={handleChange} 
                                    />
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1" />
                                <label className="form-check-label"
                                    htmlFor="exampleCheck1">Remember Me</label>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mt-4
                            rounded-pill"> Login</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login; 