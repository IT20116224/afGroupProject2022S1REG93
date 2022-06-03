import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { useNavigate } from 'react-router';

const Home = () => {

    const navigate = useNavigate();

    function handleClick() {

        navigate('/service');

    }
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center
                            text-white">TRIX Research Management Tool
                            </h1>
                            <p className="lead text-center fs-4 mb-6 text-white">TRIX Tool has the
                                capability of managing research project and automating
                                multiple tasks of research project for 4th year undergraduate
                                students in Sri Lanaka Institute of Information Technology.
                                Register as Student and see what inside it...<br />
                                You will be interesting to use it at one look.
                                <b>You can register topic, Create groups,
                                    Request for supervisor,Request
                                    for Co-supervisor</b>and more as a Student in SLIIT.</p>

                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-outline-light me-4 
                                rounded-pill px-4 py-2" onClick={handleClick}>Our Services</button>
                                <a href="/service"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <About />
            <Services />
            <Contact />
        </div>
    );
}



export default Home;