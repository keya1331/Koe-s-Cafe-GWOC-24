import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import coffee1 from '../Images/coffee1.jpg';
import coffee2 from '../Images/coffee2.jpg';
import coffee3 from '../Images/coffee3.jpg';
import coffee4 from '../Images/coffee4.jpg';
import coffee5 from '../Images/coffee5.jpg';
import coffee6 from '../Images/coffee6.jpg';
import coffee7 from '../Images/coffee7.jpg';

export const CardCoffee = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={coffee1}
                            alt="coffee1"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={coffee2}
                            alt="coffee2"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={coffee3}
                            alt="coffee3"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={coffee4}
                            alt="coffee4"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={coffee5}
                            alt="coffee5"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={coffee6}
                            alt="coffee6"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src={coffee7}
                            alt="coffee7"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCoffee