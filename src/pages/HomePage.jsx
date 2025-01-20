import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/HomeCSS.css";

const HomePage = () => {

  const navigate = useNavigate();

  const toggleChatbot = () => {
    navigate("/chatPage");
  };

  return (
    <div className="homepage">

      

      <header className="header">
        <div className="logo">AivOA</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to AIVOA</h1>
          <p>Your one-stop solution for all your needs.</p>
          <div className="hero-buttons">
            <button className="cta-button">Get Started</button>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
      </section>

      {/*CHATBOT*/}
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img src="https://media.istockphoto.com/id/1073043572/vector/robot-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support.jpg?s=612x612&w=0&k=20&c=IpqF1oBpILXVKmCPj63IftCxgDzNcTe7bvWnd-wSapw=" alt="Chatbot Icon" />
      </div>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Empowering businesses with AI Virtual Office Assistant</p>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>AI Support</h3>
            <p>Provide best AI feature to enhance your company profile.</p>
          </div>
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Build fast, scalable websites with modern technologies.</p>
          </div>
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>Create powerful mobile applications for iOS & Android.</p>
          </div>
          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>Drive traffic and increase conversion rates through digital marketing.</p>
          </div>
        </div>
      </section>
      
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@mywebsite.com</p>
        <p>Phone: +123 456 7890</p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 AIVOA. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
