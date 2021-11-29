import React from 'react';
import image3 from '../../../images/div2.png'
const AboutMe = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-5 m-auto text-center">
                        <img src={image3} style={{ width: "60%", backgroundColor: '#004b23' }} className="p-3 rounded-circle" alt="" />
                    </div>
                    <div className="col-12 col-md-7">
                        <h1 className="border-bottom border-success text-center fw-bolder"> <span className="text-primary">ABOUT</span> ME</h1>
                        <div>
                            <p>Hello, I'm MD MEHERAJ HOSSEN. A passionate Programmer who likes to explore new technologies and try something new with the time being. As MERN stack gives a facility to create a flexible and scalable web app, I found it much more interesting to start my programming career.</p>

                        </div>
                        <p className="border-bottom border-success ps-1 ">Name: MD MEHERAJ HOSSEN </p>
                        <p className="border-bottom border-success ps-1 ">Address: DOHA, QATAR </p>
                        <p className="border-bottom border-success ps-1 ">Email: md.meheraj.hossen1@gmail.com </p>
                        <p className="border-bottom border-success ps-1 "> Phone: +974 55605073 </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;