import React from 'react';
import { Link } from 'react-router-dom'; // Link component for routing

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo-container">
                {/* Logo */}
                <img src="./logo.png" alt="Logo" className="logo-img" />

                <h1>Welcome to Travel Adventures</h1>
            </div>
            <nav>
                {/* Navigation Links */}
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/destinations">Destinations</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
