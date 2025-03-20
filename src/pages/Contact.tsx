// src/pages/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! If you have any questions or feedback, feel free to reach out to us using the contact information below:</p>

            <h2>Follow Us</h2>
            <div className="social-media-links">
                <a href="https://facebook.com/youragency" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: '30px', marginRight: '10px' }} />
                </a>
                <a href="https://twitter.com/youragency" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2012.svg" alt="Twitter" style={{ width: '30px', marginRight: '10px' }} />
                </a>
                <a href="https://instagram.com/srakshitha539" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.instagram.com/srakshitha539?igsh=eTVpanlucGh5Y284" alt="Instagram" style={{ width: '30px', marginRight: '10px' }} />
                </a>
                <a href="https://linkedin.com/company/youragency" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2023.svg" alt="LinkedIn" style={{ width: '30px', marginRight: '10px' }} />
                </a>
            </div>

            <h2>Quick Links</h2>
            <ul>
                <li>
                    <a href="/terms-and-conditions">Terms and Conditions</a>
                </li>
                <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                </li>
            </ul>

            <h2>Contact Information</h2>
            <p>
                Email: <a href="mailto:srakshitha539@gmail.com">srakshitha539@gmail.com</a>
            </p>
            <p>
                Phone: +91 33465789
            </p>
        </div>
    );
};

export default Contact;
