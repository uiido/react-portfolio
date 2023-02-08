import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers.js';

export default function Contact() {
    const [formState, setFormState] = useState({ email: '', name: '', title: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { email, name, title, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Message sent', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Sorry, this email is not valid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Something wasn\'t added right. Please try again.', formState);
        }
    };

    return (
        <div class="container w-50 p-3 mt-3">
            <h2 class="text-center text-primary fw-bolder pb-3 mb-3">want to get in touch?</h2>
            <form class="mt-4" id="contact-form" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input required type="email" class="form-control" id="email" aria-describedby="emailHelp" defaultValue={email} onBlur={handleChange} />
                </div>
                <div class="mb-3">
                    <label for="fullName" class="form-label">Full Name</label>
                    <input required type="text" class="form-control" id="fullName" defaultValue={name} onBlur={handleChange} />
                </div>
                <div class="mb-3">
                    <label for="messageTitle" class="form-label">Message Title</label>
                    <input required type="text" class="form-control" id="messageTitle" defaultValue={title} onBlur={handleChange} />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea required type="text" class="form-control" rows="5" id="message" defaultValue={message} onBlur={handleChange} />
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    );
}