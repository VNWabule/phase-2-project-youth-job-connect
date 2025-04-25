import React, { useState, useEffect } from "react";
import '../src/index.css';
import ApplicationForm from "./components/ApplicationForm";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";

// Navigation
const Navigation = ({ user, onLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="nav__header">
                <span className="logo">Youthjob<span>-Connect</span></span>
                {user && (
                    <div className="user__info">
                        <span className="username">Welcome, {user.name}</span>
                        <button className="btn" onClick={onLogout}>Log Out</button>
                    </div>
                )}
                <div className="nav__menu__btn" onClick={() => setMenuOpen(!menuOpen)}>
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

// Header
const Header = ({ setUser, user, setRegisteredUser, registeredUser }) => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const toggleSignup = () => {
        setShowSignup(prev => !prev);
        setShowLogin(false); // hide login if signup is clicked
    };

    const toggleLogin = () => {
        setShowLogin(prev => !prev);
        setShowSignup(false); // hide signup if login is clicked
    };

    return (
        <header className="header__container" id="home">
            <h2>Welcome to Our Website</h2>
            <div className="header__icons">
                <img src="assets/twitter.png" alt="twitter" />
                <img src="assets/amazon.png" alt="amazon" />
                <img src="assets/figma.png" alt="figma" />
                <img src="assets/linkedin.png" alt="linkedin" />
            </div>
            <p>Join us to make your dreams come true.</p>
            {!user && (
                <div className="header__btns">
                    <button onClick={toggleSignup} >Sign Up</button>
                    <button onClick={toggleLogin}>Log In</button>
                </div>
            )}

            {registeredUser && !user && (
                <div className="welcome__message bg-green-100 text-green-800 px-4 py-2 mt-4 rounded shadow">
                    <h3 className="text-lg font-semibold">Welcome, {registeredUser.name}!</h3>
                    <p>Thanks for signing up with {registeredUser.email} 🎉</p>
                </div>
            )}


            {showSignup && (
                <div className="form-container">
                    <button className="close__btn" onClick={toggleSignup}>X</button>
                    <h3>Sign Up</h3>
                    <ApplicationForm onSignup={setRegisteredUser} />
                </div>
            )}

            {showLogin && (
                <div className="form-container">
                    <button className="close__btn" onClick={toggleLogin}>X</button>
                    <h3>Log In</h3>
                    <Login 
                    registeredUser={registeredUser} onLogin={setUser} />
                </div>
            )}
        </header>
    );
};

// Steps
const Steps = () => {
    return (
        <section id="steps">
            <div className="section__header">
                <h2>How It Works</h2>
            </div>
            <div className="steps__grid">
                {/* Keep your 4 steps cards */}
                {[1, 2, 3, 4].map((num, idx) => (
                    <div className="steps__card" key={idx}>
                        <span>{num}</span>
                        <h4>{["Sign Up", "Explore", "Take Action", "Get Started"][idx]}</h4>
                        <p>{
                            [
                                "Get started by creating an account.",
                                "Browse through our collection of services.",
                                "Make your move and start experiencing it.",
                                "Start your journey and make a difference."
                            ][idx]
                        }</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Explore
const Explore = () => {
    const services = [
        { title: "Design", text: "Innovative design solutions for your needs." },
        { title: "Development", text: "Building robust solutions for the future." },
        { title: "Marketing", text: "Grow your business with targeted strategies." },
        { title: "Support", text: "Get support when you need it, anytime." },
        { title: "SEO", text: "Optimize your online presence for better results." },
        { title: "Content", text: "Create engaging content that resonates." },
        { title: "Vacancies", text: "Apply for available vacancies and get in touch." },
        { title: "Consulting", text: "Find the right solutions tailored to your needs." },
    ];

    return (
        <section id="explore">
            <div className="section__header">
                <h2>Explore Our Services</h2>
            </div>
            <div className="explore__grid">
                {services.map((service, idx) => (
                    <div className="explore__card" key={idx}>
                        <span>{service.title}</span>
                        <h4>{service.title} Services</h4>
                        <p>{service.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Footer
const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__col">
                    <h4>About Us</h4>
                    <p>
                        We provide top-notch services that help you achieve your goals.
                        Join us today and take your business to the next level.
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

// App
const App = () => {
    const [user, setUser] = useState(null);
    
    const [registeredUser, setRegisteredUser] = useState(null);

    useEffect(() => {
        const savedRegisteredUser = localStorage.getItem("registeredUser");
        const savedUser = localStorage.getItem("loggedInUser");
    
        if (savedRegisteredUser) {
            setRegisteredUser(JSON.parse(savedRegisteredUser));
        }
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleSignup = (newUser) => {
        setRegisteredUser(newUser);
        localStorage.setItem("registeredUser", JSON.stringify(newUser));
    };
    
    const handleLogin = (user) => {
        setUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
    };
    
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("loggedInUser");
    };

    return (
        <Router>
            <div className="App">
                <Navigation user={user} onLogout={handleLogout} />
                <Header
                    user={user}
                    setUser={handleLogin}
                    registeredUser={registeredUser}
                    setRegisteredUser={handleSignup}
                />
                <Steps />
                <Explore />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
