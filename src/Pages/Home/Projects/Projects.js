import React from 'react';
import { Link } from 'react-router-dom'
import chorabali from '../../../images/chorabali 3.png'
import kafilatoly from '../../../images/kafilatoly1.png'
import motors from '../../../images/mm-motors1.png'
import cow from '../../../images/cowmarket1.png'
import lulu from '../../../images/lulu-fashon1.png'
import management from '../../../images/management1.png'
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="container py-5">
                <h1 className="text-center">CHECK OUT SOME OF MY <span className="text-primary">PROJECTS</span></h1>
                {/* chorabali */}
                <div className="row pt-4 ">
                    <div className="col-10 col-md-6 mx-auto " >
                        <img src={chorabali} className="img-fluid rounded-3" alt="" />
                    </div>
                    <div className="col-10 col-md-6 mx-auto mt-3 py-4">
                        <h4 className="text-primary"> <strong>CHORABALI DELIVERY SERVICES</strong></h4>
                        <ul>
                            <li>The project is about Foods, Groceries, Flowers, Pharmacy, Electronics and beauties Products delivery full-stack website. </li>
                            <li>When the user clicks on the make a buy now button then it will take to the Purchase page. But if  the user is not logged in then it will take the login page. Customize dashboard for the user and Admin .</li>
                            <li>Users can log in via email/password and Google with firebase authentication.</li>
                            <li>Admin only add new Services and can cancel orders of all users.</li>
                            <li> <strong>Technology </strong> : React, React Bootstrap, React Router, MongoDB, Express.js, Node.js, Firebase Authentication.</li>
                        </ul>
                        <a href="https://chorabali-delivery.web.app/" target="_blank" >  <button className="btn btn-outline-primary me-1 mb-3"> <i class="far fa-eye"></i> Live Site </button> </a>
                        <a href="https://github.com/MdMeherajHossen1/CHORABALI-DELIVERY-CLIENT-" target="_black"><button className="btn btn-outline-primary me-1 mb-3 "> <i class="fas fa-code"></i> Client side code</button></a>
                        <a href="https://github.com/MdMeherajHossen1/CHORABALI-DELIVERY-SERVER" target="_black"><button className="btn btn-outline-primary  mb-3 "> <i class="fas fa-code"></i> Server side code</button></a>

                    </div>
                </div>

                {/* motors website */}
                <div className="row pt-4 ">

                    <div className="col-10 col-md-6 mx-auto mt-3 py-4">
                        <h4 className="text-primary"> <strong>MM MOTORS LTD</strong></h4>
                        <ul>
                            <li>The project is a full-stack  car selling website, where they sell Brand new cars.</li>
                            <li>When the user clicks on the make a buy now button then it will take to the Purchase page. But if  the user is not logged in then it will take the login page. Customize dashboard for the user and Admin .</li>
                            <li>Users can log in via email/password and Google with firebase authentication.</li>
                            <li>Users can buy Car and give a review for Car and Company.</li>
                            <li> <strong>Technology </strong> : React, Material UI, React Router, MongoDB, Express.js, Node.js, Firebase Authentication.</li>
                        </ul>
                        <a href="https://mm-motors-ltd.web.app/" target="_blank" >  <button className="btn btn-outline-primary me-1 mb-3"> <i class="far fa-eye"></i> Live Site </button> </a>
                        <a href="https://github.com/MdMeherajHossen1/mm-motors-ltd" target="_black"><button className="btn btn-outline-primary me-1 mb-3 "> <i class="fas fa-code"></i> Client side code</button></a>
                        <a href="https://github.com/MdMeherajHossen1/mm-motors-server" target="_black"><button className="btn btn-outline-primary  mb-3 "> <i class="fas fa-code"></i> Server side code</button></a>
                    </div>
                    <div className="col-10 col-md-6 mx-auto " >
                        <img src={motors} className="img-fluid rounded-3" alt="" />
                    </div>
                </div>

                {/* kafilatoly hospital */}
                <div className="row pt-4 ">
                    <div className="col-10 col-md-6 mx-auto " >
                        <img src={kafilatoly} className="img-fluid rounded-3" alt="" />
                    </div>
                    <div className="col-10 col-md-6 mx-auto mt-3 py-4 shadow-lg">
                        <h4 className="text-primary"> <strong>KAFILATOLY GENERAL HOSPITAL</strong></h4>
                        <ul>
                            <li>This Project is about hospital where users can make an appiontment .</li>
                            <li>If the user is not logged in then it will take the login page. After login it will take to the previous page .</li>
                            <li>Users can log in via email/password and Google with firebase authentication.</li>
                            <li>Users can see their All appiontment.</li>
                            <li> <strong>Technology </strong> : React, Tailwind CSS , React Router, MongoDB, Express.js, Node.js, Firebase Authentication.</li>
                        </ul>
                        <a href="https://kafilatoly-general-hospital.web.app/" target="_blank" >  <button className="btn btn-outline-primary me-1 mb-3"> <i class="far fa-eye"></i> Live Site </button> </a>
                        <a href="https://github.com/MdMeherajHossen1/kafilatoly-general-hospital" target="_black"><button className="btn btn-outline-primary me-1 mb-3 "> <i class="fas fa-code"></i> Client side code</button></a>
                        <a href="https://github.com/MdMeherajHossen1/kg-hospital-server" target="_black"><button className="btn btn-outline-primary  mb-3 "> <i class="fas fa-code"></i> Server side code</button></a>
                    </div>
                </div>

                {/* management website */}
                <div className="row pt-4 ">
                    <div className="col-10 col-md-6 mx-auto mt-3 py-4 shadow-lg">
                        <h4 className="text-primary"> <strong>HIRE MANAGEMENT AGENCY</strong></h4>
                        <ul>
                            <li>The project is a Hiring Management site. Where user will hire management person</li>
                            <li>When user click Hire button then it will appear their cart</li>
                            <li>Users will see their total cost for hireing person</li>
                            <li>There is a bounch of skill and expert person on Management.</li>
                            <li> <strong>Technology </strong> : HTML5, CSS3, React, Bootstrap.</li>
                        </ul>
                        <a href="https://hire-management-agency.netlify.app/" target="_blank" >  <button className="btn btn-outline-primary me-1 mb-3"> <i class="far fa-eye"></i> Live Site </button> </a>
                        <a href="https://github.com/MdMeherajHossen1/Hire-Management-Agency" target="_black"><button className="btn btn-outline-primary me-1 mb-3 "> <i class="fas fa-code"></i> Client side code</button></a>
                    </div>

                    <div className="col-10 col-md-6 mx-auto " >
                        <img src={management} className="img-fluid rounded-3" alt="" />
                    </div>
                </div>

                {/* cow-market website */}
                <div className="row pt-4 ">
                    <div className="col-10 col-md-6 mx-auto " >
                        <img src={cow} className="img-fluid rounded-3" alt="" />
                    </div>
                    <div className="col-10 col-md-6 mx-auto mt-3 py-4 shadow-lg">
                        <h4 className="text-primary"> <strong>DIGITAL CURBANIR HUT</strong></h4>
                        <ul>
                            <li>This site is about selling Cows, goat and camel in Online.</li>
                            <li> Users only can see the interface of this e-commerse</li>
                            <li>Site is Fully responsive through Bootstrap.</li>

                            <li> <strong>Technology </strong> HTML5, CSS, Bootstrap.</li>
                        </ul>
                        <a href="https://MdMeherajHossen1.github.io/Cow-E-Commerce/" target="_blank" >  <button className="btn btn-outline-primary me-1 mb-3"> <i class="far fa-eye"></i> Live Site </button> </a>
                        <a href="https://github.com/MdMeherajHossen1/Cow-E-Commerce" target="_black"><button className="btn btn-outline-primary me-1 mb-3 "> <i class="fas fa-code"></i> Client side code</button></a>
                    </div>
                </div>

                {/* lulu website */}
                <div className="row pt-4 ">
                    <div className="col-11 col-md-6 mx-auto mt-3 py-4 shadow-lg">
                        <h4 className="text-primary"> <strong>LULU FASHON STORE</strong></h4>
                        <ul>
                            <li>This Project is E-commerse site for selling Cloths.</li>
                            <li>When the user clicks on the make a buy now button then it will appear with price in the My cart .</li>
                            <li>Every Purchase will count and tax will calculate through price of total Amount.</li>
                            <li> Responsive With Bootstrap.</li>
                            <li> <strong>Technology </strong> : JavaScript, Bootstrap, CSS , HTML5.</li>
                        </ul>
                        <a href="lulu-fashon-store.netlify.app/" target="_blank" >  <button className="btn btn-outline-primary me-1 mb-3"> <i class="far fa-eye"></i> Live Site </button> </a>
                        <a href="https://github.com/MdMeherajHossen1/Lulu-fashion-store" target="_black"><button className="btn btn-outline-primary me-1 mb-3 "> <i class="fas fa-code"></i> Client side code</button></a>
                    </div>

                    <div className="col-10 col-md-6 mx-auto " >
                        <img src={lulu} className="img-fluid rounded-3" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;