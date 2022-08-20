import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './Navbar';

import Food from './Food';
import About from './About'
import Contact from './Contact';
import StillLife from './StillLife';
import LifeStyles from './LifeStyles'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Food />
    <Contact />
    <StillLife />
    <LifeStyles />
    <About />
  </React.StrictMode>
);

