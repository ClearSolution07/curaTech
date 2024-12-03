import React from 'react';
import './AboutSection.css';
import image from '../../assets/AboutHuman.svg'; // Import the image

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="image-column">
          <div className="image-wrapper">
            <img
              src={image} // Updated image source
              alt="Construction professional"
              className="image"
            />
            <div className="experience-overlay">
              <div className="experience-number">
                <span className="number">25</span>
                <span className="plus">+</span>
              </div>
              <p className="experience-text">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="content-column">
          <p className="about-us">About Us</p>
          <h2 className="title">We're providing the best customer service</h2>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="author">
            <p className="author-name">John Doe</p>
            <p className="author-title">CEO</p>
          </div>
          <button className="learn-more-button">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
