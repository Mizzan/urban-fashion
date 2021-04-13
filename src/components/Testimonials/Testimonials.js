import React from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import testimonialImg1 from '../../images/testimonialImg1.png';
import testimonialImg2 from '../../images/testimonialImg2.png';
import './Testimonials.css';
import { ArrowRightCircle } from 'react-feather';

const testimonialsData = [
  {
    id: 'tm1',
    image: testimonialImg1,
    name: 'Natasha Malina',
    profession: 'Beauty Model in USA',
    comment:
      "Every spring I start going through dress withdrawals and go crazy over all the pretty spring dresses that come out haha, It's like famine and then feast and dresses ",
  },
  {
    id: 'tm2',
    image: testimonialImg2,
    name: 'Team Xodias',
    profession: 'Fashion House',
    comment:
      "Every spring I start going through dress withdrawals and go crazy over all the pretty spring dresses that come out haha, It's like famine and then feast and dresses ",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <p>Clients Say about us</p>
      <h1 className="testimonial-heading">Testimonial</h1>
      <div className="testimonials-card">
        {testimonialsData.map((testimonial) => (
          <SingleTestimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></SingleTestimonial>
        ))}
      </div>
      <ArrowRightCircle
        className="arrow-right-icon"
        stroke="white"
        size={42}
        fill="var(--primary-headingColor)"
      />
    </div>
  );
};

export default Testimonials;
