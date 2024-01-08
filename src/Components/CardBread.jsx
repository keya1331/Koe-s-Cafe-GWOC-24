import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import imgBread1 from '../Images/bread1.jpg';
import imgBread2 from '../Images/bread2.jpg';
import imgBread3 from '../Images/bread3.jpg';
import imgBread4 from '../Images/bread4.jpg';
import imgBread5 from '../Images/bread5.jpg';

export const CardBread = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgBread1}
                            alt="bread1"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgBread2}
                            alt="bread2"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgBread2}
                            alt="bread2"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgBread3}
                            alt="bread3"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgBread4}
                            alt="bread4"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={imgBread5}
                            alt="bread5"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBread