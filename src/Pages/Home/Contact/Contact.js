import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ga0tjka', 'template_7rfqjeq', e.target, 'user_rmSimL9cZC3KngnxwhWmQ')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <div className="bg-black">
            <div className="container py-5">
                <h1 className="text-center fw-bolder"> Contact <span className="text-primary"> Me</span> </h1>
                <div className="row">
                    <div className="col-11 col-md-7 p-3 rounded-3 mx-auto" style={{ backgroundColor: "#222222" }}>
                        <form onSubmit={sendEmail}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput2" class="form-label">Email address</label>
                                <input type="email" name="email" class="form-control" id="exampleFormControlInput2" placeholder="Your Email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput3" class="form-label">Subject</label>
                                <input type="text" name="subject" class="form-control" id="exampleFormControlInput3" placeholder="Subject" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                <textarea class="form-control" name="message" id="exampleFormControlTextarea1" placeholder="Your Message" cols="12" rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success col-12 rounded-pill"> Send <i className="fas fa-paper-plane ms-2"></i></button>
                        </form>
                    </div>
                    <div className="col-11 col-md-5 mx-auto mt-4 shadow-lg">
                        <div className="row my-5">
                            <div className="col-4  text-center my-auto">
                                <i class="far fa-envelope fs-1"></i>
                            </div>
                            <div className="col-8 border-start border-3 border-success">
                                <h3>Email at</h3>
                                <p>md.meheraj.hossen1@gmail.com</p>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-4  text-center my-auto">
                                <i class="fas fa-phone fs-1"></i>
                            </div>
                            <div className="col-8 border-start border-3 border-success">
                                <h3>Call Me</h3>
                                <p>+974 55605073</p>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-4  text-center my-auto">
                                <i class="fas fa-map-marker-alt fs-1"></i>
                            </div>
                            <div className="col-8 border-start border-3 border-success">
                                <h3>Address</h3>
                                <p>Doha, Qatar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;