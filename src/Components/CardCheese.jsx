import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import cheese1 from 'Images/cheese1.jpg';
import cheese2 from 'Images/cheese2.jpg';
import cheese3 from 'Images/cheese3.jpg';
import cheese4 from 'Images/cheese4.jpg';
import cheese5 from 'Images/cheese5.jpg';

export const CardCheese = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={cheese1}
                            alt="cheese1"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={cheese2}
                            alt="cheese2"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={cheese3}
                            alt="cheese3"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={cheese4}
                            alt="cheese4"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={cheese5}
                            alt="cheese5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCheese;
