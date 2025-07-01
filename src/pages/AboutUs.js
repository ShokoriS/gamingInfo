import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <img src="/images/about-banner.jpg" alt="Gaming Banner" className="about-banner" />
        <h1>About Gaming Info</h1>
        <p>Your ultimate destination for discovering and tracking video games.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            <strong>Gaming Info</strong> is a platform built for gamers by gamers. Whether you’re looking for the
            latest releases, trailers, or honest user ratings, we provide all the essential game info you need
            in one place.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We aim to be the most trusted source for game information, connecting players with the games they love.
            We also offer community features like comments and ratings so you can share your voice.
          </p>
        </section>

        <section className="about-section contact-info">
          <h2>Contact Us</h2>
          <p>📧 <strong>Email:</strong> gaminginfo.support@gmail.com</p>
          <p>💬 <strong>WhatsApp:</strong> +123 456 7890</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
