import React, { useState }from 'react';

import Navbar from './Navbar';

import Food from './Food';
import About from './About'
import Contact from './Contact';
import StillLife from './StillLife';
import LifeStyles from './LifeStyles'

const App = () => {
 
  const iniState = false

  const [showFoodSection, setShowFoodSection] = useState(false);
  const [showStillSection, setStillSection] = useState(false);
  const [showLifeStyles, setShowLifeStyles] = useState(false);
  const [showAboutState, setAbout] = useState(false);
  const [showContactState, setShowContact] = useState(false);




  const showFood = () => 
    setShowFoodSection((showFood) => 
    !showFood, setStillSection(iniState), setShowLifeStyles(iniState), setAbout(iniState), setShowContact(iniState));
  
    const showStill = () => 
    setStillSection((showStill) => 
    !showStill, setShowFoodSection(iniState), setShowLifeStyles(iniState), setAbout(iniState), setShowContact(iniState));
  
  const showLife = () => 
    setShowLifeStyles((showLife) => 
    !showLife, setShowFoodSection(iniState), setStillSection(iniState), setAbout(iniState), setShowContact(iniState))

  const showAbout = () => 
    setAbout((showAbout)=> 
    !showAbout, setShowFoodSection(iniState), setStillSection(iniState), setShowLifeStyles(iniState), setShowContact(iniState))

  const showContact = () => 
    setShowContact((showContact) => 
    !showContact,setShowFoodSection(iniState), setStillSection(iniState), setShowLifeStyles(iniState), setAbout(iniState) )
 
  return (
    <div className="App">
      <Navbar showFood={showFood}
              showStill={showStill}
              showLife={showLife}
              showAbout={showAbout}
              showContact={showContact}/>
        {showFoodSection &&  <Food />}
        {showStillSection && <StillLife />}
        {showLifeStyles && <LifeStyles />}
        {showAboutState && <About />}
        {showContactState && <Contact />}
    </div>
  );
}

export default App;