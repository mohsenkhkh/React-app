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
      <div className='main-image'>
        
      </div>
    </main>
    </>
  );
};

export default Home;
