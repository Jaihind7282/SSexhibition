import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  // Array of testimonial data
  const testimonials = [
    {
      name: "Varun Singh",
      image: "images/Cultural Heritage.jpg", // Placeholder image URL, replace with actual
      rating: 5,
      comment:
        "Amazing experience! The exhibition was well-organized and the designs were breathtaking!",
    },
    {
      name: "Rajiv Gupta",
      image: "images/Photography Showcase.jpg", // Placeholder image URL, replace with actual
      rating: 4,
      comment:
        "A fantastic exhibition! Loved the creativity and the attention to detail.",
    },
    {
      name: "md salman",
      image: "images/Sculpture Garden.jpg", // Placeholder image URL, replace with actual
      rating: 5,
      comment:
        "A truly immersive experience! I was blown away by the event’s professionalism and creativity.",
    },
    {
      name: "Santosh Singh",
      image: "images/Historicalartifacts.avif", // Placeholder image URL, replace with actual
      rating: 4,
      comment:
        "Great event! The exhibitions were very engaging and informative. Highly recommend.",
    },
  ];

  // Settings for the slick slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Client Say</h2>

      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-comment">"{testimonial.comment}"</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
