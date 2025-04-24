import React from "react";
import './AboutUs.css'; // Optional for styling

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="section__header">
        <h2>About Us</h2>
      </div>
      <div className="about-us__content">
        <p>
          Welcome to Youthjob-Connect! We are committed to helping young people 
          connect with exciting job opportunities and valuable resources. Our platform 
          is designed to help you take the first steps towards building a successful career.
        </p>
        <p>
          We provide a variety of services including job listings, career advice, 
          and professional development tools to help you grow and succeed in your career journey.
        </p>
        <p>
          Our team consists of passionate individuals dedicated to making a difference and empowering the youth.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
