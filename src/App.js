import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// Desktop Components
import Home from "./Components/Slider";
import Header from "./Components/Header";
import About from './Components/About';
import Footer from './Components/Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// Mobile Components
import MHome from './Components/MHome';
import MMenu from './Components/MMenu';
import MHeader from './Components/MHeader';
import MSlider from './Components/MSlider';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length-1) {
        clearInterval(intervalId);
        startBlinkingCursor();
      }
    }, 175);

    return () => clearInterval(intervalId);
  }, [text]);

  const startBlinkingCursor = () => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    setTimeout(() => {
      clearInterval(cursorInterval);
      setShowCursor(false);
    }, 5000);
  };

  const decodedText = displayText.replace(/&apos;/g, "'").replace(/&quot;/g, '"');

  return (
    <div className='animation_layer parallax text-6xl font-semibold text-beige relative'>
      <div className='inline-block'>{decodedText}</div>
      {showCursor && <span className='inline-block w-1 h-15 bg-coffee'>&nbsp;</span>}
    </div>
  );
};


function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <div className='desktop hidden lg:block'>

        <Parallax pages={4} style={{ top: '0', left: '0' }} className='sm:hidden animation bg-yellow-100'>

          <ParallaxLayer offset={0}>
            <div className='animation_layer parallax' id='background'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0}  speed={1} id='Main'>
            <div className='animation_layer parallax' id='layer3'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0}  speed={1.25}>
            <div className='animation_layer parallax' id='layer2'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0}  speed={1.5}>
            <div className='animation_layer parallax' id='layer1'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.62}  speed={2.5} className='text-center'>
            <Typewriter text="  Welcome to Koe's Kafe"/>
          </ParallaxLayer>

          <ParallaxLayer sticky={{ start: 0, end: 6 }}>
            <Header />
          </ParallaxLayer>

          <ParallaxLayer offset={1.175} id='home' className='text-5xl text-center font-semibold'>
            <Typewriter text="  Some Glimpses..."/>
            <Home />
          </ParallaxLayer>

          <ParallaxLayer offset={2.5} factor={0.5}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={3.5} factor={0.5}>
            <Footer />
          </ParallaxLayer>

        </Parallax>
        </div>

        <div className='mobile lg:hidden scroll-smooth'>

          <div className="h-screen">

            <MHeader></MHeader>
          
            <div id='MHome' className="MHome h-full bg-cover bg-center" style={{backgroundImage: "url('../Images/landing3.jpg')"}}>
              <MHome></MHome>
            </div>

            <div className="MSlider">
              <MSlider></MSlider>
            </div>

            <div id='MMenu' className="MMenu h-[50%]">
              <MMenu></MMenu>
            </div>

          </div>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;