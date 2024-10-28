// src/components/Header.js
import React from 'react';
import './Header.css'; // Optional for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">My App</a>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="account-actions">
          <a href="/login">Login</a> | <a href="/signup">Sign Up</a>
        </div>
      </nav>
      <div className='burger-menu'>
        <div className='layout-burger-1'></div>
        <div className='layout-burger-2'></div>
        <div className='layout-burger-3'></div>
      </div>
    </header>
  );
};

export default Header;
