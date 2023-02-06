import React from 'react';

function Footer() {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted">© 2023 Erin Bowen</p>

                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Github</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Stack Overflow</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">LinkedIn</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;