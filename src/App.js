import React, { useState } from "react";
import '../src/index.css'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav__header">
        <span className="logo">Youthjob<span>-Connect</span></span>
        <div
          className="nav__menu__btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
      <div className={`nav__links ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#steps">Steps</a>
        <a href="#explore">Explore</a>
        <a href="#jobs">Jobs</a>
      </div>
    </nav>
  );
};

// Header section
const Header = () => {
  return (
    <header className="header__container">
      <h2>Welcome to Our Website</h2>

      <div className="header__icons">

        <img src="assets/twitter.png" alt="header" />
        <img src="assets/amazon.png" alt="header" />
        <img src="assets/figma.png" alt="header" />
        <img src="assets/linkedin.png" alt="header" />

      </div>


      <p>Join us to make your dreams come true.</p>
      <div className="header__btns">
        <a href="#signup">Sign Up</a>
        <a href="#login">Log In</a>
      </div>
    </header>

  );
};

// Steps section
const Steps = () => {
  return (
    <section id="steps">
      <div className="section__header">

        <h2>How It Works</h2>

      </div>
      <div className="steps__grid">
        <div className="steps__card">
          <span>1</span>
          <h4>Sign Up</h4>
          <p>Get started by creating an account.</p>
        </div>
        <div className="steps__card">
          <span>2</span>
          <h4>Explore</h4>
          <p>Browse through our collection of services.</p>
        </div>
        <div className="steps__card">
          <span>3</span>
          <h4>Take Action</h4>
          <p>Make your move and start experiencing it.</p>
        </div>
        <div className="steps__card">
          <span>4</span>
          <h4>Get Started</h4>
          <p>Start your journey and make a difference.</p>
        </div>
      </div>
    </section>
  );
};

// Explore section
const Explore = () => {
  return (
    <section id="explore">
      <div className="section__header">
        <h2>Explore Our Services</h2>
      </div>
      <div className="explore__grid">
        <div className="explore__card">
          <span>Design</span>
          <h4>Design Services</h4>
          <p>Innovative design solutions for your needs.</p>
        </div>
        <div className="explore__card">
          <span>Development</span>
          <h4>Development Services</h4>
          <p>Building robust solutions for the future.</p>
        </div>
        <div className="explore__card">
          <span>Marketing</span>
          <h4>Marketing Services</h4>
          <p>Grow your business with targeted strategies.</p>
        </div>
        <div className="explore__card">
          <span>Support</span>
          <h4>Support Services</h4>
          <p>Get support when you need it, anytime.</p>
        </div>
        <div className="explore__card">
          <span>SEO</span>
          <h4>SEO Services</h4>
          <p>Optimize your online presence for better results.</p>
        </div>
        <div className="explore__card">
          <span>Content</span>
          <h4>Content Services</h4>
          <p>Create engaging content that resonates with your audience.</p>
        </div>
        <div className="explore__card">
          <span>Vacancies</span>
          <h4>Available Vacancies</h4>
          <p>Apply for available vacancies and get in touch with us for more details.</p>
        </div>
        <div className="explore__card">
          <span>Consulting</span>
          <h4>Consulting Services</h4>
         
          <p>Work with us to find the right solutions tailored to your needs.</p>

        </div>
      </div>
    </section>
  );
};

// Footer section
const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__col">
          <h4>About Us</h4>
          <p>
            We provide top-notch services that help you achieve your goals. Join
            us today and take your business to the next level.
          </p>
        </div>
        <div className="footer__coll">
          <h4>Links</h4>
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#steps">How It Works</a>
            <a href="#explore">Explore</a>
            <a href="#jobs">Jobs</a> 
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <p>&copy; 2025 My Website | All rights reserved</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Steps />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;
