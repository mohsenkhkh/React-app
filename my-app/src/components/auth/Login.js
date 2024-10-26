import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Import useNavigate
import authService from '../../services/API';
import PhoneInput from 'react-phone-input-2'
import { useAuth } from '../../context/AuthContext';

import 'react-phone-input-2/lib/material.css'
import styles from './Login.module.css'; // Import CSS Module
import { data } from 'autoprefixer';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [methode, setmethode] = useState('sms');
  const [activation_code, setActivation_code] = useState('');
  const [token, setToken] = useState('');
  const [_id, set_id] = useState('');
  const [goToDashboard, setGoToDashboard] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loginWithEmail, setLoginWithEmail] = useState(true);
  const [setInfo, setSetInfo] = useState(false);
  const [loginWithPhone, setLoginWithPhone] = useState(false);
  const [isActivation, setIsActivation] = useState(false);
  const [getPassword, setGetPassword] = useState(false);
  const [error, setError] = useState('');

  const typeOfLogin = (e) => {
    e.preventDefault();
    console.log("handle login with ?")
    if (loginWithEmail){
    setLoginWithPhone(true);
    setLoginWithEmail(false)
    } else if(isActivation){
      setLoginWithPhone(true)
      setIsActivation(false)
    }
    else {
        setLoginWithPhone(false);
        setLoginWithEmail(true)
    }

  }
  const LoginLogout = () => {
    if(loginWithEmail){
      setIsRegister(true)
      setLoginWithEmail(false)
    } else if(setIsRegister) {
      setIsRegister(false)
      setLoginWithEmail(true)
    }  
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit clicked!')
    try {
      const response = await authService.login({ email, password });
      if (response.success) {
        setGoToDashboard(true)
        console.log("login response: ", response)
        data = {
          token: response.token,
          username: response.email
        }
        login(data)
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('first_name', response.first_name);
        localStorage.setItem('email', response.email);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    data = {
      phone_number: phone,
      first_name: first_name,
      last_nameL: last_name,
      email: email,
      password: password
    }
    try {
      const response = await authService.signup(data);
      if (response.success) {
        setGoToDashboard(true)
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('first_name', response.first_name);
        localStorage.setItem('email', response.email);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Failed to singup. Please check your credentials.');
    }
  };
  const handleActivation = (e) => {
    e.preventDefault()
    console.log("handleActivation")
    authService.sendActivation(phone , activation_code).then((r) => {
      console.log("r:",r)
      if(r.success == true){
        setFirst_name(r.user.first_name)
        setLast_name(r.user.last_name)
        setEmail(r.user.email)
        setToken(r.token)
        setIsActivation(false);
        setSetInfo(true);
      }
    }).catch((error) => {
      console.log(error) 
    });
  }
  const handleLoginWithPhone = (e) => {
    e.preventDefault()
    authService.register(phone, methode).then((r) =>{
      setLoginWithPhone(false)
      setIsActivation(true)
    })

  }
  const setInformation = (e) => {
    e.preventDefault()
    data ={
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone,
      password: password,
    }
    authService.setInformation(data).then((r) =>{
      if(r.success == true){
        setGoToDashboard(true)
      }
      // setLoginWithPhone(false)
      // setIsActivation(true)
    })

  }
  if(goToDashboard || (token && email)){
    return <Navigate to={"/dashboard"}/>;
  }else {

  return (
<div className={styles.loginContainer}>
{loginWithEmail && (   
    
        <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
        <label>Email address</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'

            required
          />
        </div>
        <div className="mb-3">
        <label>Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='form-control'
        />
        </div>
        <div className="mb-3">
        <div className="custom-control custom-checkbox">
            <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
            </label>
        </div>
        </div>
        <div className="d-grid">
        <button type="submit" className="btn btn-primary mb-3">
            Submit
        </button>
        <button className="btn btn-primary mb-3" onClick={typeOfLogin}>Login with phone number</button> 
        </div>
        <div className='d-flex justify-content-between'>
          <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
          </p>
          <p className="forgot-password text-right">
          <a onClick={LoginLogout} href='#'>Regitser?</a>
          </p>
        </div>
    </form>
    )}
    {loginWithPhone && (
        <form onSubmit={handleLoginWithPhone}>
        <h3>Sign In</h3>
        <div className={'align-items-center mb-2'}>
        <PhoneInput
            inputStyle={{width: '100%'}}
            country={'us'}
            onChange={(value) => setPhone(value)}
          />
         </div> 


        <div className="mb-3">
        <div className="custom-control custom-checkbox">
            <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
            </label>
        </div>
        </div>
        <div className="d-grid">
        <button type="submit" className="btn btn-primary mb-3">
            Submit
        </button>
        <button className="btn btn-primary mb-3" onClick={typeOfLogin}>Login with Email</button>
        </div>
        <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
        </p>
    </form>

    )}
    {isActivation && (
        <form onSubmit={handleActivation}>
        <h3>Sign In</h3>
        <div className="mb-3">
        <label>Activation Code</label>
        <input
            type="number"
            placeholder='------'
            value={activation_code}
            onChange={(e) => setActivation_code(e.target.value)}
            required
            className='form-control'
        />
        </div>


        {/* <div className="mb-3">
        <div className="custom-control custom-checkbox">
            <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
            </label>
        </div>
        </div> */}
        <div className="d-grid">
        <button type="submit" className="btn btn-primary mb-3">
            Submit
        </button>
        <button onClick={typeOfLogin} className="btn btn-primary mb-3">
            Change your phone Number?
        </button>
        </div>
    </form>

    )}
    {getPassword && (
        <form>
        <h3>Sign In</h3>
        <div className={'align-items-center mb-2'}>
        <PhoneInput
            inputStyle={{width: '100%'}}
            country={'us'}
            onChange={(value) => setPhone(value)}
          />
         </div> 


        <div className="mb-3">
        <div className="custom-control custom-checkbox">
            <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
            </label>
        </div>
        </div>
        <div className="d-grid">
        <button type="submit" className="btn btn-primary mb-3">
            Submit
        </button>
        <button className="btn btn-primary mb-3" onClick={typeOfLogin}>Login with Email</button>
        </div>
        <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
        </p>
    </form>

    )}
    {setInfo && (
        <form onSubmit={setInformation}>
        <h3>Information</h3>
        <div className="mb-3">
        <label>First Name</label>
        <input
            type="text"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required
            className='form-control'
        />
        </div>
        <div className="mb-3">
        <label>Last Name</label>
        <input
            type="text"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            required
            className='form-control'
        />
        </div>
        <div className="mb-3">
        <label>Email</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='form-control'
        />
        </div>
        <div className="mb-3">
        <label>Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='form-control'
        />
        </div>

        <div className="d-grid">
        <button type="submit" className="btn btn-primary mb-3">
            Submit
        </button>
        </div>
    </form>

    )}
    {isRegister && (
        <form onSubmit={handleRegister}>
        <h3>Sign Up</h3>
        <div className="mb-3">
        <label>First Name</label>
        <input
            type="text"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            className='form-control'

            required
          />
        </div>
        <div className="mb-3">
        <label>Last Name</label>
        <input
            type="text"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            className='form-control'

            required
          />
        </div>
        <div className="mb-3">
        <label>Email address</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'

            required
          />
        </div>
        <div className="mb-3">
        <label>Password</label>
        <input
            type="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
            required
            className='form-control'
        />
        </div>
        <div className="mb-3">
        <div className="custom-control custom-checkbox">
            <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
            </label>
        </div>
        </div>
        <div className="d-grid">
        <button type="submit" className="btn btn-primary mb-3">
            Submit
        </button>
        </div>
        <div className='d-flex justify-content-between'>
          <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
          </p>
          <p className="forgot-password text-right">
          <a onClick={LoginLogout} href='#'>log In?</a>
          </p>
        </div>
    </form>

    )}
    </div>

  );
};
};

export default Login;
