import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');



  return (

    <>
    <Header />
    <main>
      <div className='main-image'>
        <div className='caption-main'>
          <p>Enjoy Your Wonderful Holidays With A Great Luxury Experience!</p>
          <h1>Most Relaxing Place</h1>
        </div>
      </div>
      <div className='second-section'>
        <div className='check-availability'>
          <form className='check-availability-form'>
            <div className='check-availability-div'>
              <div className='check-field'>
                <p>CHECK-IN</p>
                <div className='input-icon-flex'>
                  <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#777777' }} />
                  <input placeholder='Check-In Date' type='text'></input>
                </div>
              </div>
            </div>
            <div className='check-availability-div'>
              <div className='check-field'>
                <p>CHECK-OUT</p>
                <div className='input-icon-flex'>
                  <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#777777' }} />
                  <input placeholder='Check-Out Date' type='text'></input>
                </div>
              </div>
            </div>
            <div className='check-availability-div'>
              <div className='check-field'>
                <p>ROOMS</p>
                <div className='input-icon-flex'>
                  <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#777777' }} />
                  <input placeholder='Suite' type='text'></input>
                </div>
              </div>
            </div>
            <div className='check-availability-div'>
              <div className='check-field'>
                <p>GUESTS</p>
                <div className='input-icon-flex'>
                  <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#777777' }} />
                  <input placeholder='1 person' type='text'></input>
                </div>
              </div>
            </div>

            <div className='check-availability-div'>
                <button className='button-check-forms'>CHECK<br />AVAILIBITY</button>
            </div>

          </form>
        </div>
      </div>
    </main>
    </>
  );
};

export default Home;
