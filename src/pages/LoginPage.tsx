// src/pages/LoginPage.tsx
import React from 'react';
import LoginForm from '../components/LoginForm'; // Import the LoginForm component

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
