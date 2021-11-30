import React from 'react';
import html from '../../../images/html.png'
import css from '../../../images/css.png'
import js from '../../../images/js.png'
import node from '../../../images/nodejs.png'
import express from '../../../images/express.png'
import mongodb from '../../../images/mongodb.png'
import firebase from '../../../images/firebase.png'
import material from '../../../images/material.png'
import tailwind from '../../../images/tailwind-css.png'
import bootstrap from '../../../images/bootstrap-4.png'
import react from '../../../images/react.png'
import github from '../../../images/github.png'
import './Skill.css'
const Skill = () => {
    return (
        <div className="bg-black">
            <div className="container py-5">
                <h1 className="fw-bolder border-bottom text-center ">My <span className="text-primary">Skills</span></h1>
                <div className="row row-cols-2 row-cols-md-4 py-3 g-4">
                    <div className="col">
                        <div className="p-2 tech mx-auto text-center">
                            <img src={html} className="tech-img" alt="" />
                            <h4 className="pt-1">HTML</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={css} className="tech-img" alt="" />
                            <h4 className="pt-1 ">CSS</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={tailwind} className="tech-img" alt="" />
                            <h4 className="pt-1 ">Tailwind CSS</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={material} className="tech-img" alt="" />
                            <h4 className="pt-1 ">Material UI</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={bootstrap} className="tech-img" alt="" />
                            <h4 className="pt-1 ">Bootstrap 5</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={js} className="tech-img" alt="" />
                            <h4 className="pt-1 ">JavaScript</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={react} className="tech-img" alt="" />
                            <h4 className="pt-1 ">React</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={node} className="tech-img" alt="" />
                            <h4 className="pt-1 ">Node JS</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={express} className="tech-img" alt="" />
                            <h4 className="pt-1 ">Express JS</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={mongodb} className="tech-img" alt="" />
                            <h4 className="pt-1 ">MongoDB</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={github} className="tech-img" alt="" />
                            <h4 className="pt-1 ">GitHub</h4>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-2  tech mx-auto text-center ">
                            <img src={firebase} className="tech-img" alt="" />
                            <h4 className="pt-1 ">Firebase</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>);
};

export default Skill;