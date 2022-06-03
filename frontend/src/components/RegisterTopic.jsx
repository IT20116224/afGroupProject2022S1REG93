import React, { useState } from 'react';

const RegisterTopic = () => {

    const [topics, setTopic] = useState({
        lname: "",
        leaderStudentID: "",
        topic: ""

    });


    //Handle Inputs
    const handleChange = (e) => {
        const {name, value} = e.target;

        setTopic({
            ...topics,
            [name]: value
        })
    }



    //Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        //Object Destructuring
        //Store Object Data into Variables

        const { lname, leaderStudentID, topic } = topics;
        try {

            const res = await fetch('/topic', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    lname, leaderStudentID, topic
                })
            })

            if (res.status === 400 || !res) {
                window.alert("Topic is Not Registered. Try Again!")
            } else {
                window.alert("Topic Registered Successfully!");
                setTopic({
                    lname: "",
                    leaderStudentID: "",
                    topic: ""
                })
            }

        } catch (error) {
            console.log(error);
        }
    }



    return (

        <div>

            <section id="registerTopic">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-15">
                            <h3 className="fs-5 text-center mb-0">Register it Now! </h3><br />
                            <h1 className="display-6 text-center mb-4">
                                Register Your <b> Research Topic</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/registerTopic.jpg" alt="regTopic" className="w-75" />
                        </div>

                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="lname"
                                        className="form-label">Leader's Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        id="lname"
                                        placeholder="Enter Leader's Name"
                                        name="lname"
                                        value={topics.lname}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="l_id"
                                        className="form-label">Leader's Student ID</label>
                                    <input 
                                        type="text" required
                                        className="form-control"
                                        id="leaderStudentID"
                                        placeholder="Enter Leader's Student ID"
                                        name="leaderStudentID"
                                        value={topics.leaderStudentID}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="researchTopic"
                                        className="form-label">Research Topic</label>
                                    <input 
                                        type="text" required
                                        className="form-control"
                                        id="topic"
                                        placeholder="Enter Research Topic"
                                        name="topic"
                                        value={topics.topic}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-50 mt-5
                                rounded-pill"> Register Topic</button>

                            </form>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default RegisterTopic;