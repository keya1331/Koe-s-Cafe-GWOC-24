import React, { useState, useEffect } from 'react';
import img from '../Images/about.png';
import { Fade } from 'react-reveal';

const About = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 770);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center lg:px-32 px-5 pt-8 pb-8 bg-transparent">
            <h1 className="text-4xl font-semibold text-center lg:mt-14 mt-24 mb-8">About Us</h1>

            <div className="flex flex-col md:flex-row mt-5">

                <Fade left>
                <div className="md:w-1/2">
                    <img
                        src={img}
                        alt="Coffee Beans"
                        className={`${isSmallScreen ? 'w-1/3 md:h-72 h-auto mx-auto mb-10' : 'w-3/4 md:h-72 md:w-auto h-auto ml-auto'}`}
                    />
                </div>
                </Fade>

                <Fade right>
                <div className="md:w-1/2 md:ml-20 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Some interesting heading...</h2>
                    <p className="mb-4 mt-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sint velit,
                        beatae aperiam consectetur nemo iusto asperiores, molestias impedit
                        voluptatem quos! Alias unde, rerum molestiae quibusdam harum facere autem
                        ex?
                    </p>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas
                        ab sapiente reprehenderit. Tempora aspernatur nesciunt deleniti provident
                        beatae incidunt.
                    </p>
                    <div className='mt-5 ml-start'>
                        <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-600">
                            Learn More
                        </button>
                    </div>
                </div>
                </Fade>
                
            </div>
        </div>
    );
};

export default About;