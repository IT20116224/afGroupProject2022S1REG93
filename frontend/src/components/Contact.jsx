import React, { useState }from 'react';

const Contact = () => {


    const [msg, setMessage] = useState({
        name: "",
        email: "",
        message: ""

    });


    //Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMessage({...msg, [name] : value});
    }


     //Handle Submit
     const handleSubmit = async (event) => {
        event.preventDefault();

        //Object Destructuring
        //Store Object Data into Variables
        
        const {name, email, message} = msg; 
        try{

             const res = await fetch('/message', {
                 method : "POST",
                 headers : {
                     "Content-Type" : "application/json"
                 },

                 body : JSON.stringify({
                     name, email, message
                 })
             })

             if(res.status === 400 || !res) {
                 window.alert("Message Not Sent. Try Again!")
             }else{
                 window.alert("Message Sent Successfully!");
                 setMessage({
                    name: "",
                    email: "",
                    message: ""
                 })
             }

        }catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">
                                Have Some <b> Questions?</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/contactus2.jpg" alt="Contact" className="w-75" />
                        </div>

                        <div className="col-md-6">

                            <form onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Your Name
                                    </label>
                                    <input
                                        type="text" required
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter Your Name"
                                        name="name"
                                        value={msg.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email" required
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        name="email"
                                        value={msg.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">
                                        Your Message
                                    </label>
                                    <textarea
                                        className="form-control" required
                                        id="exampleFormControlTextarea1"
                                        rows="5"
                                        name="message"
                                        value={msg.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary
                                rounded-pill px-4"> Send Message <i className="fa fa-paper-plane ms-2"></i>
                                </button>
                            </form>

                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
}

export default Contact;