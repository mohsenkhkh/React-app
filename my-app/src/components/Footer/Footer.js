// src/components/Header.js
import React, { useEffect, useState} from 'react';
import './Footer.css'; // Optional for styling

const Footer = () => {
  return (
    <footer className="footer" >
      <div className='footer-container'>
        <div class="row mb-5 pb-5 justify-content-between">
          <div class="col-md-6 col-lg">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2 logo d-flex">
                <a class="navbar-brand align-items-center" href="index.html">
                    <span class="">Unwind <small>Hotel Booking</small></span>
                </a>
              </h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <ul class="ftco-footer-social list-unstyled mt-2">
                <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                <li><a href="#"><span class="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Services</h2>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="ftco-footer-widget mb-4">
                  <ul class="list-unstyled">
                    <li><a href="#"><span class="fa fa-chevron-right me-2"></span>Free Wifi</a></li>
                    <li><a href="#"><span class="fa fa-chevron-right me-2"></span>Easy Booking</a></li>
                    <li><a href="#"><span class="fa fa-chevron-right me-2"></span>Restaurant</a></li>
                    <li><a href="#"><span class="fa fa-chevron-right me-2"></span>Swimming Pool</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="ftco-footer-widget mb-4">
                  <ul class="list-unstyled">
                    <li><a href="#"><span class="fa fa-chevron-right me-2"></span>Beauty &amp; Health</a></li>
                    <li><a href="#"><span class="fa fa-chevron-right me-2"></span>60" Flatscreen TV</a></li>
                    <li><a href="#"><span class="fa fa-chevron-right me-2"></span>Cold Aircondition</a></li>
                    <li><a href="#"><span class="fa fa-chevron-right me-2"></span>Help &amp; Support</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-2">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Quick Links</h2>
              <ul class="list-unstyled">
                <li><a href="#"><span class="fa fa-chevron-right me-2"></span>Home</a></li>
                <li><a href="#"><span class="fa fa-chevron-right me-2"></span>About</a></li>
                <li><a href="#"><span class="fa fa-chevron-right me-2"></span>Rooms</a></li>
                <li><a href="#"><span class="fa fa-chevron-right me-2"></span>Resto &amp; Bar</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Have a Questions?</h2>
              <div class="block-23 mb-3">
                <ul>
                  <li><span class="icon fa fa-map marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><a href="#"><span class="icon fa fa-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                  <li><a href="#"><span class="icon fa fa-paper-plane pr-4"></span><span class="text">info@yourdomain.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
