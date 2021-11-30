import React from 'react';
import './Banner.css'
import image2 from '../../../images/my-bg.png'
const Banner = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>

            <div className="container text-white">
                <div className="row py-5">
                    <div className="col-12 col-md-7">
                        <h1 style={{ fontSize: '4rem' }}>I'm <span className="text-primary">MEHERAJ HOSSEN</span></h1>
                        <h3>I'm a a Front End Web Application developer , working with React Framework</h3>
                        <button className="btn btn-outline-primary"> <a className='btn' href="../../../images/RESUME-OF-MD MEHERAJ HOSSEN.pdf" download>Download My Resume</a><i class="fas fa-arrow-circle-down"></i></button>
                        <p><i class="fab fa-github icon"></i> <i class="fab fa-linkedin icon"></i> <i class="fab fa-facebook icon"></i></p>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src={image2} className="img-fluid" alt="" />
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Banner;