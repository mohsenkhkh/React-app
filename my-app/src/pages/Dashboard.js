import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');



  return (

    <>
    <Header />
    <div className='main-dashboard'>
        <h1>Profile Page</h1>
        <h4>You can change your information here</h4>
    </div>
    </>
  );
};

export default Home;
