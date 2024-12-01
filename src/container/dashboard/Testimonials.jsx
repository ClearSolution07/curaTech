import React, { useState, useEffect } from "react";
import "./testimonials.css";
import testimonial from "../../assets/testimonial.png";

const testimonials = [
  {
    id: 1,
    image: testimonial,
    text: "Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique",
    name: "Katy Grey",
    title: "CEO Grey Industries",
  },
  {
    id: 2,
    image: testimonial,
    text: "Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique",
    name: "Harsh",
    title: "CEO Harsh Industries",
  },
  {
    id: 3,
    image: testimonial,
    text: "Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique",
    name: "Anupam",
    title: "CEO Anupam Industries",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-label">TESTIMONIALS</div>
      <h2 className="testimonials-title">Our Clients Say</h2>
      <div className="testimonial-card">
        <img
          src={testimonials[currentSlide].image}
          alt={`${testimonials[currentSlide].name} giving testimonial`}
          className="testimonial-image"
        />
        <div className="testimonial-content">
          <div className="quote-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4a1 1 0 00-1-1H6a2 2 0 00-2 2v5a2 2 0 002 2h4v3a1 1 0 01-1 1H7a1 1 0 000 2h2a2 2 0 002-2v-5zm11 0h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3a2 2 0 00-2 2v5a2 2 0 002 2h4v3a1 1 0 01-1 1h-2a1 1 0 000 2h2a2 2 0 002-2v-5z" />
            </svg>
          </div>
          <p className="testimonial-text">{testimonials[currentSlide].text}</p>
          <h3 className="client-name">{testimonials[currentSlide].name}</h3>
          <p className="client-title">{testimonials[currentSlide].title}</p>
          <div className="navigation-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
