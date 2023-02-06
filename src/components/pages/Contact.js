import React from 'react';

export default function Contact() {
    return (
        <div class="container w-50 p-3">
            <form class="mt-4">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="fullName" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="fullName" />
                </div>
                <div class="mb-3">
                    <label for="messageTitle" class="form-label">Message Title</label>
                    <input type="text" class="form-control" id="messageTitle" />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea type="text" class="form-control" rows="5" id="message" placeholder="what is your message?" />
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
    );
}