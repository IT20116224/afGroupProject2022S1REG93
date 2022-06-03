import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name : "",
        studentID : "",
        email : "",
        password : ""
    });

    
    //Handle Inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setStudent({...student, [name] : value});
    }


    //Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        //Object Destructuring
        //Store Object Data into Variables
        const {name, studentID, email, password} = student; 
        try{

             const res = await fetch('/register', {
                 method : "POST",
                 headers : {
                     "Content-Type" : "application/json"
                 },

                 body : JSON.stringify({
                     name, studentID, email, password
                 })
             })

             if(res.status === 400 || !res) {
                 window.alert("Already Used Details!")
             }else{
                 window.alert("Registered Successfully!");
                 navigate('/login')
             }

        }catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column 
                        align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder">Hello, Student</h1>
                        <p className="lead text-center">Enter Your Details to Register </p>
                        <h5 className="mb-4">OR</h5>
                        <a href="/login" className="btn btn-outline-light 
                        rounded-pill pb-2 w-50">Login</a>
                    </div>

                    <div className="col-md-6 p-5 fw-bolder mb-5">

                        <form onSubmit={handleSubmit} method="POST">
                            <div className="mb-3">
                                <label htmlFor="name"
                                    className="form-label">Student Name</label>
                                <input type="text" required
                                    className="form-control"
                                    id="name" 
                                    name="name"
                                    value={student.name}
                                    onChange={handleInput}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="studentID"
                                    className="form-label">Student ID</label>
                                <input type="text" required
                                    className="form-control"
                                    id="studentID" 
                                    name="studentID"
                                    value={student.studentID}
                                    onChange={handleInput}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1"
                                    className="form-label">Email address</label>
                                <input type="email" required
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" 
                                    name="email"
                                    value={student.email}
                                    onChange={handleInput}/>
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
                                    onChange={handleInput}/>
                            </div>

                            <button type="submit" className="btn btn-outline-primary w-100 mt-4
                            rounded-pill">Register</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;