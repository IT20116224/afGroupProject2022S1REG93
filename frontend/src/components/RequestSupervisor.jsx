import React, { useState } from "react";

const RequestSupervisor = () => {


    const [sup, setSupervisor] = useState({
        leaderStudentID: "",
        groupID: "",
        supervisorName: ""

    });


    //Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setSupervisor({ ...sup, [name]: value });
    }


    //Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        //Object Destructuring
        //Store Object Data into Variables

        const { leaderStudentID, groupID, supervisorName } = sup;
        try {

            const res = await fetch('/supervisor', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    leaderStudentID, groupID, supervisorName
                })
            })

            if (res.status === 400 || !res) {
                window.alert("Request Not Sent. Try Again!")
            } else {
                window.alert("Request Sent Successfully!");
                setSupervisor({
                    leaderStudentID: "",
                    groupID: "",
                    supervisorName: ""
                })
            }

        } catch (error) {
            console.log(error);
        }
    }


    return (

        <div>
            <section id="supervisor">
                <div className="container my-5 py-5">

                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Supervisors</h3><br />
                            <h1 className="display-6 text-center mb-4"> Select any of
                                our<b> Talented</b> Senior Lectuers in SLIIT as
                                your supervisor...</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>

                    <div className="row mt-5">

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user4.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Lecturer John
                                        Smith</h5>
                                    <p className="card-text lead">Lecturer John Smith interested in Artificial Intelligence areas that required 
                                    in Software Engineering.  He had a Master Artificial Intelligence MSc. in 
                                    The University of Texas at Dallas at Richardson, USA</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center"><br />
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Dr. Elisa
                                        Mitchel</h5>
                                    <p className="card-text lead">Dr. Elisa Mitchel interested in many
                                    areas in Software Engineering. She had Ph.D. -  Computer Science and Software Engineering
                                    in The George Washington University - School of Engineering and Applied Science</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center"><br />
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Lecturer Mashi
                                        Wilson</h5>
                                    <p className="card-text lead"> Lecturer Mashi Wilson had her MSc. in MSc in
                                     Computer Science and Software Engineering at Jacobs University in Bremen, Germany.
                                     She interested in SOftware Oriented Architecture.</p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="row mt-5">

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user4.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center"><br />
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Dr. Krish
                                        Kumar</h5>
                                    <p className="card-text lead">Dr. Krisha Kumar has PhD in Computer Science - Software Systems
                                    in Charles University Faculty of Mathematics and Physics. He has 5 year experience as a Senior 
                                    Lecturer.He interested in High Performance Computing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center"><br />
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Lecturer Clara
                                        Arnold</h5>
                                    <p className="card-text lead">Lecturer Clara Arnold had Master
                                     of Science in Computer Science - Software Engineering at University of Southern California.
                                     She interested in Data mining semantic-web-mining and Distributed computing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center"><br />
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Dr. Emily
                                        Wotson</h5>
                                    <p className="card-text lead">Dr. Emily had her docterate in her thirties 
                                    in PhD Computer Science at Botswana International University Of 
                                    Science And Technology Palapye, Botswana. She interested in Distributed system and 
                                    High Performance Computing..</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>


            {/* Form for Request Supervisor */}


            <section id="supervisor2">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0"> Request Supervisor </h3> <br />
                            <h1 className="display-6 text-center mb-4">
                                Send request to us for<b> Supervisor</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/requestsup.jpg" alt="request" className="w-75" />
                        </div>

                        <div className="col-md-6">

                            <form onSubmit= {handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label htmlFor="leaderStudentID" className="form-label">
                                        Leader's Student ID
                                    </label>
                                    <input
                                        type="text" required
                                        className="form-control"
                                        id="leaderStudentID"
                                        placeholder="Enter Leader's Student ID"
                                        name="leaderStudentID"
                                        value={sup.leaderStudentID}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Group ID
                                    </label>
                                    <input
                                        type="text" required
                                        className="form-control"
                                        id="groupID"
                                        placeholder="name@example.com"
                                        name="groupID"
                                        value={sup.groupID}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="supervisorName" className="form-label">
                                        Supervisor's Name
                                    </label>
                                    <textarea
                                        className="form-control" required
                                        id="supervisorName"
                                        rows="3"
                                        name="supervisorName"
                                        value={sup.supervisorName}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary
                                rounded-pill px-4"> Send Request <i className="fa fa-paper-plane ms-2"></i>
                                </button>
                            </form>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default RequestSupervisor;