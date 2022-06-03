import React from "react";

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/about2.jpg" alt="About" 
                            className = "w-85 mt-10" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className = "w-50"/>
                            <p className="lead mb-4"> 
                            TRIX is a tool that ensure to do maulti tasks in one 
                            platform for 4th year students in SLIIT. Ih helps 
                            to manage their 4th year research project more easily.
                            Student groups must choose a research topic in a specific
                            research field and register it in TRIX. TRIX manage to 
                            request supervisor and co-supervisors as their need.
                            TRIX gives capability to create groups among the research 
                            group projects. After finishing your research project 
                            student can submit their documents to TRIX. 
                            As well as they can download research templates in TRIX 
                            and use it for their project.
                            Hurry up, try it!!!!! Discover its capability to ease
                            your research project. </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;