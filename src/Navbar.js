import React, { useState } from 'react';

import Food from './Food';

import './css/styles.css';

function Navbar(props) {
  const [show, setShow] = useState()
  return (
    <header className="Header">
      <nav>
        <ul className="Nav__links">
        <li><a href='/'>Vira Simon-Nikulina</a></li>
          <li id="food"><a href='/'>Food</a></li>
          <li id="stillLife"><a href='/'>Still Life</a></li>
          <li  id="lifeStyles"><a href='/'>Life styles</a></li>
          <li id="about"><a href='/'>About</a></li>
          <li id="contact"><a href='/'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;