// src/components/Header.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const Navigate = useNavigate()
    useEffect(()=>{
        Navigate('/login')

    })
    console.log('hey')
  return (
    <h1>sign Up</h1>
  );
};

export default Signup;
