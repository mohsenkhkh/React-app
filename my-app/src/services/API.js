import axios from 'axios';
import { json } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your backend API URL

const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'Login failed. Please try again.' };
  }
};
const signup = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, credentials);
    return response.data;
  } catch (error) {
    console.error('signup error:', error);
    return { success: false, message: 'signup failed. Please try again.' };
  }
};


const register = (phone, methode) => {
  return new Promise(function (resolve, reject) {
    const data = { 
      phone_number: phone,
      methode: methode
     };

    axios
      .post(`${API_URL}/phoneLogin`,data)
      .then(({data}) => {
        return resolve(data);
        // response.json();
      })
      .catch(function (error) {
        console.log("post error()--->", error);
        return reject(error);
      });
  });
};


const sendActivation = (phone, activation_code) => {
  return new Promise(function (resolve, reject) {
    const data = { 
      phone_number: phone,
      activation_code: activation_code
     };
    console.log("data :" , data)
    axios
      .post(`${API_URL}/activationCode`,data)
      .then(({data}) => {
        localStorage.setItem('token', data.token)
        return resolve(data);
        // response.json();
      })
      .catch(function (error) {
        console.log("post error()--->", error);
        return reject(error);
      });
  });
};


const setInformation = (data) => {
  return new Promise(function (resolve, reject) {
    console.log("data :" , data)
    axios
      .post(`${API_URL}/setInformation`,data)
      .then(({data}) => {
        return resolve(data);
        // response.json();
      })
      .catch(function (error) {
        console.log("post error()--->", error);
        return reject(error);
      });
  });
};

export default {
  setInformation,
  sendActivation,
  register,
  login,
  signup,
  // add signup, logout, etc. here if needed
};
