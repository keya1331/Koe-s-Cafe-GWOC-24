import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const reviews = [
    {
      Name: 'Kriti Patel',
      Review: 'Really good experience, Fairly priced, Good vibes, Good staff. Do give it a try.'
    },
    {
      Name: 'Disha Shah',
      Review: 'Fine decor with chill and calm environment. Good variety of options for all different flavor palettes.'
    },{
      Name: 'Kavya Patel',
      Review: 'Well trained staff and good customer service. Terrace section is quite pretty. Coffee and Food is delightful too. Must visit! '
    },{
      Name: 'Sam Ladumor',
      Review: 'Different coffee blends and roasts available with impressive manual brew. Pretty interior and good ambience.'
    },{
      Name: 'Mital Semlani',
      Review: 'Quite honestly refreshing coffee and coffee mocktails! Love that they make everything from scratch, their pizza bases, pasta and coffee! Service and food on point.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[95%] md:max-h-max max-h-max mx-auto">
      
      <div className="max-w-full">
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <div className='md:w-[500px] w-[110px] h-[275px] text-center bg-beige pb-4 rounded-xl md:h-[450px] mx-auto'>
                <img src="Images/person.png" className='md:w-44 md:pt-8 mx-auto w-12 pt-4 md:pb-4'/>
                <h3 className='md:text-4xl md:py-3 text-base font-semibold'>{review.Name}</h3>
                <p className='md:text-xl text-xs'>{review.Review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}