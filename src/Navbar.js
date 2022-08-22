import React from 'react';


import './css/styles.css';

function Navbar(props) {
 
  const {showFood} = props
  const {showStill} = props
  const {showLife} = props
  const {showAbout} = props
  const {showContact} = props

  return (
    <header className="Header">
      <nav>
        <ul className="Nav-links">
        <li><a href='/'>Vira Simon-Nikulina</a></li>
          <li id="food" ><a onClick={() => {showFood()}}>Food</a></li>
          <li id="stillLife"><a onClick={() => {showStill()}}>Still Life</a></li>
          <li id="lifeStyles"><a onClick={() => {showLife()}}>Life styles</a></li>
          <li id="about"><a onClick={() => {showAbout()}}>About</a></li>
          <li id="contact"><a onClick={() => {showContact()}}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;