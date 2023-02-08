import React from 'react';
import ResumePdf from '../../assets/resume.pdf'
import ResumeImg from '../../assets/resume.png'

export default function Resume() {
    return (
        <div class="container p-2 mt-3">
            <h2 class="text-center text-primary fw-bolder pb-3 mb-3">my qualifications</h2>
            <div class="row d-flex justify-content-center">
                <div class="col-4">
                    <p>One row of skills</p>
                </div>
                <div class="col-2 text-center">
                    <a href="https://saidou25.github.io/Print-or-Film/" target="_"><img src={ResumeImg} className='img-fluid rounded p-2 text-bg-secondary' alt='Resume' /></a>
                    <a class="btn mt-1 btn-primary" target="_" href="https://github.com/Saidou25/Print-or-Film" role="button">Prefer to download?</a>
                </div>
            </div>

        </div>
    );
}