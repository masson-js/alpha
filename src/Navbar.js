import React from 'react';

import './css/styles.css';

function Navbar(props) {
  const {showFood} = props
  const {showStill} = props

  return (
    <header className="Header">
      <nav>
        <ul className="Nav__links">
        <li><a href='/'>Vira Simon-Nikulina</a></li>
          <li id="food"><a href='#' onClick={() => showFood()}>Food</a></li>
          <li id="stillLife"><a href='#' onClick={() => showStill()}>Still Life</a></li>
          <li id="lifeStyles"><a href='/'>Life styles</a></li>
          <li id="about"><a href='/'>About</a></li>
          <li id="contact"><a href='/'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;