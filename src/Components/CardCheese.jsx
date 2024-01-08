import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import imgCheese1 from '../Images/cheese1.jpg';
import imgCheese2 from '../Images/cheese2.jpg';
import imgCheese3 from '../Images/cheese3.jpg';
import imgCheese4 from '../Images/cheese4.jpg';
import imgCheese5 from '../Images/cheese5.jpg';

export const CardCheese = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCheese1}
                            alt="cheese1"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCheese2}
                            alt="cheese2"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCheese3}
                            alt="cheese3"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCheese4}
                            alt="cheese4"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgCheese5}
                            alt="cheese5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCheese;
