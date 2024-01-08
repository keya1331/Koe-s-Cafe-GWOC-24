import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(10);
  const slidesPerPage = 4;

  const showSlide = (index) => {
    const slides = document.querySelector('.photoshow-slides');

    if (index < 0) {
      setCurrentSlide(totalSlides - slidesPerPage);
    } else if (index >= totalSlides - slidesPerPage + 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }

    slides.style.transform = `translateX(${-currentSlide * (100 / slidesPerPage)}%)`;
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  document.onkeydown = (e) => {
    if (e.keyCode === 37) {
      prevSlide();
    } else if (e.keyCode === 39) {
      nextSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setTotalSlides(3); // Adjust the number of slides for small screens
      } else {
        setTotalSlides(10); // Default number of slides for larger screens
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mt-40 mb-20 photoshow-slideshow relative overflow-hidden mx-auto z-0">
      <div className="photoshow-slides flex gap-4 transition-transform duration-500 ease-in-out z-0">
        {[...Array(totalSlides)].map((_, index) => (
          <div key={index} className="photoshow-slide min-w-[25%]">
            <img src={`Images/${index + 1}.jpeg`} alt={`Pottery ${index + 1}`} className="h-[90vh] w-full object-cover z-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;