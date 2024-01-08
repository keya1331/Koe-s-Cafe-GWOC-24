import React, { useState, useEffect } from 'react';

const MSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(10);
  const slidesPerPage = 1;

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    showSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    showSlide((currentSlide + 1) % totalSlides);
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
      setTotalSlides(width < 768 ? 1 : 10);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideWidth = 100 / totalSlides;

  return (
    <div className="pt-4 photoshow-slideshow relative overflow-hidden h-screen mx-auto">
      <div
        className="photoshow-slides flex gap-4 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${-currentSlide * slideWidth}%)` }}
      >
        {[...Array(totalSlides)].map((_, index) => (
          <div key={index} className="photoshow-slide min-w-[25%]">
            <img
              src={`Images/${index + 1}.jpeg`}
              alt={`Pottery ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0">
        <button onClick={prevSlide} className="bg-gray-500 text-white p-1 mx-1">
          &lt;
        </button>
        <button onClick={nextSlide} className="bg-gray-500 text-white p-1 mx-1">
          &gt;
        </button>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => showSlide(index)}
            className={`bg-gray-500 text-white${
              currentSlide === index ? ' opacity-50' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MSlider;
