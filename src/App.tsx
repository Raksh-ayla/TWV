import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Destination from './pages/Destination';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Header from './components/Header';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/about" element={<About />} />  {/* About page */}
        <Route path="/contact" element={<Contact />} />  {/* Contact page */}
        <Route path="/destinations" element={<Destination />} />  {/* Destinations page */}
        <Route path="/login" element={<LoginPage />} />  {/* Login page */}
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
