import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');



  return (

    <>
    <Header />
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>This is a public page accessible by guests.</p>
    </main>
    </>
  );
};

export default Home;
