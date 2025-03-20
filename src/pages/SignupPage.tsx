// src/pages/SignupPage.tsx
import React from 'react';
import SignupForm from '../components/SignupForm';  // Import the SignupForm component

const SignupPage: React.FC = () => {
    return (
        <div className="signup-page">
            <SignupForm />
        </div>
    );
};

export default SignupPage;
