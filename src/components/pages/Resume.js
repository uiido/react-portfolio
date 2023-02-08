import React from 'react';
import ResumeImg from '../../assets/resume.png'

export default function Resume() {
    return (
        <div class="container p-2 mt-3 ms-3 me-3">
            <h2 class="text-center text-primary fw-bolder pb-3 mb-3">my qualifications</h2>
            <div class="row d-flex justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <p><span class="text-primary fw-bolder fs-5">front-end skills</span>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul></p>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <p><span class="text-primary fw-bolder fs-5">back-end skills</span>
                        <ul>
                            <li>APIs</li>
                            <li>REST</li>
                            <li>Node.js</li>
                            <li>Handlebars</li>
                            <li>Express</li>
                            <li>Sequelize</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                        </ul></p>
                </div>
                <div class="col-lg-2 col-md-12 text-center">
                    <a href={require("../../assets/resume.pdf")} target="_"><img src={ResumeImg} className='img-fluid rounded p-2 text-bg-secondary' alt='Resume' /></a>
                    <a class="btn mt-1 btn-primary" target="_" href={require("../../assets/resume.pdf")} role="button">Prefer to download?</a>
                </div>
            </div>

        </div >
    );
}