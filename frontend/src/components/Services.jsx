import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {

    const navigate = useNavigate();

    function handleClick(){

        navigate('/registerTopic');

    }

    function handleClick1(){

        navigate('/requestSupervisor');

    }

    function handleClick2(){

        navigate('/requestCoSupervisor');

    }

    return (
        <div>
            <section id="services">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Services</h3>
                            <h1 className="display-6 text-center mb-4">Our <b>
                                 Awesome</b> Services</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card p-3" >
                                <div className="card-body text-center">
                                    <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Register Topic</h5>
                                    <p className="card-text lead">You can register your research topic 
                                    by in here. Just click register button and fill the relevant form.</p>
                                    <button className="btn btn-outline-primary me-4 
                                    rounded-pill px-4 py-2" onClick={handleClick} >REGISTER</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-3" >
                                <div className="card-body text-center">
                                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Create Groups</h5>
                                    <p className="card-text lead">Create student groups according to your 
                                    research groups. Add members to yours group and communicate with them.</p>
                                    <button className="btn btn-outline-primary me-4 
                                    rounded-pill px-4 py-2">CREATE</button>
                                </div>
                            </div>
                        </div> 

                        <div className="col-md-4">
                            <div className="card p-3" >
                                <div className="card-body text-center">
                                    <i className="fa fa-phone fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Request Supervisor</h5>
                                    <p className="card-text lead">You can request any supervisor in here.
                                    According to your research topic you can select one of supervisor and
                                    request. </p>
                                    <button className="btn btn-outline-primary me-4 
                                    rounded-pill px-4 py-2"  onClick={handleClick1}>REQUEST</button>
                                </div>
                            </div>
                        </div>                         
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card p-3" >
                                <div className="card-body text-center">
                                    <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Request Co-supervisor</h5>
                                    <p className="card-text lead">In here you can request Co-supervisor 
                                    according to your idea. If your supervisor can not connect with all time 
                                    you can request Co-supervisor for your group.</p>
                                    <button className="btn btn-outline-primary me-4 
                                    rounded-pill px-4 py-2" onClick={handleClick2}>REQUEST</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-3" >
                                <div className="card-body text-center">
                                    <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Submit Documents</h5>
                                    <p className="card-text lead">After done your research project you and 
                                    your group can submit research paper for TRIX research management tool
                                    in here..It will send to your Supervisor.</p>
                                    <button className="btn btn-outline-primary me-4 
                                    rounded-pill px-4 py-2">SUBMIT</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-3" >
                                <div className="card-body text-center">
                                    <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Download Templates</h5>
                                    <p className="card-text lead">When admin publish research templates, documents 
                                    and other research area materials you can download them
                                    after discussing with you group members.</p>
                                    <button className="btn btn-outline-primary me-4 
                                    rounded-pill px-4 py-2">DOWNLOAD</button>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Services;