import React, { useState } from "react";

const RequestCosupervisor = () => {


    const [cosup, setCoSupervisor] = useState({
        leaderStudentID: "",
        groupID: "",
        cosupervisorName: ""

    });


    //Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setCoSupervisor({ ...cosup, [name]: value });
    }


    //Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        //Object Destructuring
        //Store Object Data into Variables

        const { leaderStudentID, groupID, cosupervisorName } = cosup;
        try {

            const res = await fetch('/supervisor', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    leaderStudentID, groupID, cosupervisorName
                })
            })

            if (res.status === 400 || !res) {
                window.alert("Request Not Sent. Try Again!")
            } else {
                window.alert("Request Sent Successfully!");
                setCoSupervisor({
                    leaderStudentID: "",
                    groupID: "",
                    cosupervisorName: ""
                })
            }

        } catch (error) {
            console.log(error);
        }
    }


    return (

        <div>
            <section id="cosupervisor">
                <div className="container my-5 py-5">

                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Co-Supervisors</h3><br />
                            <h1 className="display-6 text-center mb-4"> Select any of
                                our<b> Talented</b> Lectuers and demonstrators in SLIIT as
                                your co-supervisor...</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>

                    <div className="row mt-5">

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user4.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Lecturer Nikil 
                                    Mahendra</h5>
                                    <p className="card-text lead">Lecturer Nikil has Bsc in Computer Science - Software Systems
                                    in Charles University Faculty of Mathematics and Physics. He has 3 year experience as a 
                                    Lecturer. He interested in High Performance Computing..</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Dr. Lisa
                                        Mark</h5>
                                    <p className="card-text lead">Dr.Lisa Mark has PhD in Computer Science - Software Systems
                                    in Oxford University Faculty of Mathematics and Physics. She has 2 year experience as a Senior 
                                    Lecturer.She interested in Human Computer Interaction.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Lecturer Misha 
                                    Christians</h5>
                                    <p className="card-text lead">Lecturer Misha Christians had her MSc. in MSc in
                                     Computer Science and Software Engineering at Cambridge University in United Kingdom
                                     She interested in Software Oriented Architecture..</p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="row mt-5">

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user4.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Dr. Lalith
                                        Patel</h5>
                                    <p className="card-text lead">Dr. Lalith had his docterate 
                                    in PhD Computer Science at University of West Florida, University Of 
                                    Science And Technology Florida. He interested in Distributed system and 
                                    High Performance Computing..</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Lecturer Rossy
                                        Ariel</h5>
                                    <p className="card-text lead">Lecturer Rossy had her MSc. in MSc in
                                     Computer Science and Software Engineering at Oxford.
                                     She interested in Social Web / Social Network Analysis and 
                                     High Performance Computing</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" >
                            <div className="card p-3">
                                <img src="/images/user2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Dem. Visaka
                                        Rudrigo</h5>
                                    <p className="card-text lead">Dem. Visaka currently stdying her MSc in 
                                    Computer Science and Software Engineering 
                                    as well as had her Bsc in Software Engineering at SLIIT and working as a 
                                    demonstrator.She interested in Distributed Systems.</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>


            {/* Form for Request Supervisor */}


            <section id="cosupervisor2">
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
                                        value={cosup.leaderStudentID}
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
                                        value={cosup.groupID}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="cosupervisorName" className="form-label">
                                        Co-Supervisor's Name
                                    </label>
                                    <textarea
                                        className="form-control" required
                                        id="cosupervisorName"
                                        rows="3"
                                        name="cosupervisorName"
                                        value={cosup.cosupervisorName}
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

export default RequestCosupervisor;