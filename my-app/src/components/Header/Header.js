// src/components/Header.js
import React, { useEffect, useState} from 'react';
import './Header.css'; // Optional for styling

const Header = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity based on scroll position, maxing out at 0.5
      const opacity = Math.min(window.scrollY / 200, 0.8); // Adjust denominator to control scroll sensitivity
      setBgOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className="header" style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}>
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
