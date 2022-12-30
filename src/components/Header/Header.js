import React from 'react';
import './_Header.scss';

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a className="nav_logo" href="index.html">
            Cyril's Portfolio Website
          </a>
          <div className="nav_menu">
            <ul className="item_list">
              <li className="item">
                <a href="#home">Home</a>
              </li>
              <li className="item">
                <a href="#about">About</a>
              </li>
              <li className="item">
                <a href="#skill">Skills</a>
              </li>
              <li className="item">
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li className="item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
