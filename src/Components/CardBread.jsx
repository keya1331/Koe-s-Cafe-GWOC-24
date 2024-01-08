import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const CardBread = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src='public/Images/bread1.jpg'
                            alt="bread1"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src='public/Images/bread2.jpg'
                            alt="bread2"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src='public/Images/bread2.jpg'
                            alt="bread2"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src='public/Images/bread3.jpg'
                            alt="bread3"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src='public/Images/bread4.jpg'
                            alt="bread4"
                        />
                    </div>
                </div>
                <div className="embla__slide">
                    <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                            className='rounded-xl'
                            src='public/Images/bread5.jpg'
                            alt="bread5"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBread