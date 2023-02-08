import React, { Profiler } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UrgentCare from '../../assets/ExpressUrgentCare.png';
import PrintOrFilm from '../../assets/PrintOrFilm.png'
import TechBlog from '../../assets/TechBlog.png'
import Ecommerce from '../../assets/EcommerceBackend.png'
import TeamProfile from '../../assets/TeamProfileGenerator.png'
import SocialNetwork from '../../assets/SocialNetworkAPI.png'

export default function Portfolio() {
    return (
        <div class="container p-2 mt-3">
            <h2 class="text-center text-primary fw-bolder pb-3 ms-me-2 mb-3">view my work</h2>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <a href="https://enigmatic-tundra-51864.herokuapp.com/" target="_"><img src={UrgentCare} className='img-fluid rounded' alt='Express Urgent Care' /></a>
                    <h2 class="text-info">Express Urgent Care</h2>
                    <p>A group project that provides users with the ability to easily make an appointment at an urgent care. Users may log into an account and book an appointment on a calendar for a specific service.</p>
                    <p><a class="btn btn-secondary" target="_" href="https://github.com/MasonMarc/Urgent-Care-Appointment-Scheduler" role="button">View Code »</a> <a class="btn btn-primary" target="_" href="https://enigmatic-tundra-51864.herokuapp.com/" role="button">View Site »</a></p>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <a href="https://saidou25.github.io/Print-or-Film/" target="_"><img src={PrintOrFilm} className='img-fluid rounded' alt='Print or Film?' /></a>
                    <h2 class="text-info">Print Or Film</h2>
                    <p>A group project that allows users to find a movie of their choice, be presented with multiple copies of a related book, sorted by review number, to allow a user to pick a book to read before the movie.</p>
                    <p><a class="btn btn-secondary" target="_" href="https://github.com/Saidou25/Print-or-Film" role="button">View Code »</a> <a class="btn btn-primary" target="_" href="https://saidou25.github.io/Print-or-Film/" role="button">View Site »</a></p>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <a href="https://calm-tundra-31787.herokuapp.com/" target="_"><img src={TechBlog} className='img-fluid rounded' alt='Tech Blog' /></a>
                    <h2 class="text-info">Tech Blog</h2>
                    <p>A blog that allows users to create an account in order to post their thoughts and add comments to other user's posts. If a user changes their mind, they may also delete their posts.</p>
                    <p><a class="btn btn-secondary" target="_" href="https://github.com/uiido/tech_blog" role="button">View Code »</a> <a class="btn btn-primary" target="_" href="https://calm-tundra-31787.herokuapp.com/" role="button">View Site »</a></p>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <a href="https://www.youtube.com/watch?v=A56FILRK6V4&ab_channel=Uiido" target="_"><img src={Ecommerce} className='img-fluid rounded' alt='E-Commerce Back-end' /></a>
                    <h2 class="text-info">E-commerce Back-end</h2>
                    <p>A functional e-commerce site code that manages items by their categories and tags. Users may create, update, and delete new items, categories, and tags. Users will assign items to the category and tag that best suites them.</p>
                    <p><a class="btn btn-secondary" target="_" href="https://github.com/uiido/E-Commerce-Back-End-Mockup-" role="button">View Code »</a> <a class="btn btn-primary" target="_" href="https://www.youtube.com/watch?v=A56FILRK6V4&ab_channel=Uiido" role="button">View Demo »</a></p>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <a href="https://github.com/uiido/team-profile-generator/raw/main/assets/Video-Demonstration.gif" target="_"><img src={TeamProfile} className='img-fluid rounded' alt='Team Profile Generator' /></a>
                    <h2 class="text-info">Team Profile Generator</h2>
                    <p>A generator that creates a web-developer team, starting with a manager and allowing a user to add more teammates. Teammates include more managers, engineers, and interns. The team is then posted to a uniquely generated page.</p>
                    <p><a class="btn btn-secondary" target="_" href="https://github.com/uiido/team-profile-generator" role="button">View Code »</a> <a class="btn btn-primary" target="_" href="https://github.com/uiido/team-profile-generator/raw/main/assets/Video-Demonstration.gif" role="button">View Demo »</a></p>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <a href="https://youtu.be/3BrFelvw1Cs" target="_"><img src={SocialNetwork} className='img-fluid rounded' alt='Social Network API' /></a>
                    <h2 class="text-info">Social Network API</h2>
                    <p>A functional social network API that allows users to be created, updated, and deleted, as well as users to become friends. Users may also create, update, and delete thoughts, and share reactions on each other's thoughts.</p>
                    <p><a class="btn btn-secondary" target="_" href="https://github.com/uiido/Social_Network_API" role="button">View Code »</a> <a class="btn btn-primary" target="_" href="https://youtu.be/3BrFelvw1Cs" role="button">View Demo »</a></p>
                </Col>
            </Row>

        </div >
    );
}