import React from 'react';
import './SingleTestimonial.css';

const SingleTestimonial = ({ testimonial }) => {
  return (
    <div className="single-testimonial">
      <img src={testimonial.image} alt="" />
      <div className="testimonial-desc">
        <h4>{testimonial.name}</h4>
        <p>{testimonial.profession}</p>
        <p>{testimonial.comment}</p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
