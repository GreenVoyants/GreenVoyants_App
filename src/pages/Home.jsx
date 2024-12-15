import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Green Voyants</h1>
                <p>Your Sustainable Journey Starts Here</p>
            </header>
            
            <section className="main-content">
                <div className="feature-section">
                    <h2>Our Services</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Eco-Friendly Travel</h3>
                            <p>Discover sustainable travel options</p>
                        </div>
                        <div className="feature-card">
                            <h3>Green Solutions</h3>
                            <p>Innovative environmental solutions</p>
                        </div>
                        <div className="feature-card">
                            <h3>Community Impact</h3>
                            <p>Making a difference together</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;