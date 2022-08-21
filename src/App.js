import React, { useState }from 'react';

import Navbar from './Navbar';

import Food from './Food';
import About from './About'
import Contact from './Contact';
import StillLife from './StillLife';
import LifeStyles from './LifeStyles'

const App = () => {
  const [showFoodSection, setShowFoodSection] = useState(false);
  const [showStillSection, setStillSection] = useState(false)

  const showFood = () => setShowFoodSection((showOne) => !showOne)
  const showStill = () => setStillSection((showStill) => !showStill)
  
 
  return (
    <div className="App">
      <Navbar showFood={showFood}
              showStill={showStill} />
        {showFoodSection ? <Food /> : null}
        {showStillSection ? <StillLife /> : null}
        <LifeStyles />
        <About />
        <Contact />
    </div>
  );
}

export default App;