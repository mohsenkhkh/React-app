import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');



  return (

    <>
    <Header />
    <div className='main-dashboard'>
      
    </div>
    </>
  );
};

export default Dashboard;
