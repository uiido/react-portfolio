import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Portfolio() {
    return (
        <div class="container p-3 mt-3">
            <h2 class="text-center pb-3">View My Work</h2>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid rounded' alt='...' />
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View Code »</a> <a class="btn btn-primary" href="#" role="button">View Site »</a></p>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid rounded' alt='...' />
                    <h2>Heading</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View Code »</a> <a class="btn btn-primary" href="#" role="button">View Site »</a></p>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid rounded' alt='...' />
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View Code »</a> <a class="btn btn-primary" href="#" role="button">View Site »</a></p>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid rounded' alt='...' />
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View Code »</a> <a class="btn btn-primary" href="#" role="button">View Site »</a></p>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid rounded' alt='...' />
                    <h2>Heading</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View Code »</a> <a class="btn btn-primary" href="#" role="button">View Site »</a></p>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid rounded' alt='...' />
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View Code »</a> <a class="btn btn-primary" href="#" role="button">View Site »</a></p>
                </Col>
            </Row>

        </div>
    );
}