import React, { useState, useEffect } from 'react';
import Popup from './popup';
import './resppop.css';
import img5 from './popup1.jpg';

function Pop() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    const timer =  setTimeout(() => {
         setIsOpen(true);
     }, 3000)
      return () => clearTimeout(timer);
 }
 useEffect(() => {
    handleOpen();
}, [])

  const togglePopup = () => {
     setIsOpen(!isOpen);
    
  }
 
  return <div>
    
    {isOpen && <Popup
      content={<>
        
        <div  style={{padding:15 , display: 'flex', justifyContent: 'center'}}><img src={img5} alt="Coffee"></img></div>
        
                <div  style={{padding:5 , textAlign: 'center'}}>
                <h2 style={{color:'black' , fontWeight:600}}>Coffee Roasting Workshop</h2>
                </div>
                <div style={{textAlign:'center'}}>
                <p style={{fontWeight: 550 , fontSize:19 , color:'black'}}>🌟 Join us for an aromatic adventure at our Coffee Roasting Workshop! ☕</p>
                <p style={{fontWeight: 550 , fontSize:19 , color:'black'}}>Indulge your senses in the world of freshly roasted coffee beans as we guide you through the art and science of crafting the perfect cup. Discover the secrets behind selecting premium beans, mastering the roasting process, and unlocking unique flavor profiles.☕✨</p>
                <h2 style={{color:'black' , fontWeight:600}}>#CoffeeRoastingWorkshop</h2>
                </div>
               
      </>}
      handleClose={togglePopup}
      
    />}
  </div>
}
 
export default Pop;