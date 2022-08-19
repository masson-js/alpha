import React from 'react';
import './css/styles.css';

function Navbar() {
  return (
    <header className="Header">
      <nav>
        <ul className="Nav__links">
        <li><a href='/'>Vira Simon-Nikulina</a></li>
          <li><a href='/'>Food</a></li>
          <li><a href='/'>Still Life</a></li>
          <li><a href='/'>Life styles</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;