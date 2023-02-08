import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a
                                href="#about"
                                onClick={() => handlePageChange('About')}

                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                href="#resume"
                                onClick={() => handlePageChange('Resume')}

                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                href="#portfolio"
                                onClick={() => handlePageChange('Portfolio')}

                                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                href="#contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default NavTabs;