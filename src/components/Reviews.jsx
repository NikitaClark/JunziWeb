import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ReviewCarousel.css';

const reviews = [
  {
    company: "Rolls-Royce",
    text: "Respect Business is the best testament to a team's ability to perform, and I have no hesitation in hiring them again. BairesDev's pleasant collaboration style and high-level acumen rapidly catapulted significant momentum towards achieving our objectives.",
    author: "Brad Holmy",
    position: "Product Manager at Rolls Royce"
  },
  {
    company: "IQVIA",
    text: "BairesDev provides amazing development and design resourcing, along with best in class account management support. We were able to speed up product and design and delivery while reducing our costs. BairesDev has been hands down the best vendor decision my team has made.",
    author: "Adam Roy",
    position: "Director of Digital Strategy"
  },
  {
    company: "Instructure",
    text: "BairesDev is a trustworthy, knowledgeable, and adaptable development partner. They also know how to push back and ask questions when appropriate, which is a cornerstone of our corporate culture and really adds value.",
    author: "Matt Mecham",
    position: "Program Manager"
  },
  {
    company: "NextRoll",
    text: "By seamlessly integrating with the internal team, BairesDev helped achieve key objectives by performing to the same expectations as full-time employees. Their strong onboarding methods, reliable deliverables, and responsiveness continue to strengthen the relationship.",
    author: "Patrick Mee",
    position: "VP of Engineering"
  },
  {
    company: "R/GA",
    text: "Having access to such a vast talent pool, BairesDev has allowed us to staff our teams with solid engineers and execute our projects faster than ever. Their staffing process is way better than any other outsourcing company in the region, so we can always rely on them.",
    author: "Roque Rovagnati",
    position: "SVP, Managing Director, LATAM"
  }
];

const ReviewCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-slide-wrapper">
            <div className="review-slide">
              <h3>{review.company}</h3>
              <p>"{review.text}"</p>
              <p><strong>{review.author}</strong></p>
              <p>{review.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;