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
            <h1 className="text-6xl font-mono text-center lg:mt-14 mt-24 mb-8">ABOUT US</h1>

            <div className="flex flex-col md:flex-row mt-5">

                <Fade left>
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <img
                            src={img}
                            alt="Coffee Beans"
                            className={`${isSmallScreen ? 'w-1/3 md:h-72 h-auto mx-auto mb-10' : 'w-3/4 md:h-72 md:w-auto h-auto ml-auto'}`}
                        />
                    </div>
                </Fade>

                <Fade right>
                    <div className="md:w-1/2 md:ml-20 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-4">The Journey of Kôė</h2>
                        <p className="mb-4 mt-5">
                            In the inception of Kôė, the vision unfurled as a sublime microcosm of coffee roasting and gastronomic curation, enveloped in an ambiance that transcends the ordinary—an embodiment of a holistic experience tailored for our discerning clientele.
                        </p>
                        <p className="mb-4">
                            At the heart of this venture lies an unwavering passion for coffee, a relentless pursuit of roasting excellence, and an ardent commitment to crafting a haven for aficionados. The odyssey embarked upon an immersive exploration of diverse coffee beans, an artful mastery of roasting techniques, and the meticulous curation of a menu that serves as a canvas for the myriad flavors encapsulated within the tapestry of global coffee origins.
                        </p>
                        <p className="mb-4">
                            Kôė stands as a bastion of sustainability and ethical trade, its roots firmly planted in the advocacy for fair practices. With a fervent dedication to sourcing beans responsibly, our narrative intertwines with the story of Indian coffee farmers, echoing a commitment to their craft and fostering a symbiotic relationship between growers and connoisseurs alike. In every sip, we invite you to savor not just the essence of coffee but the collective spirit of an enduring journey—where passion, quality, and community converge to elevate the coffee experience to unprecedented heights.
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
