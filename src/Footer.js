import React from 'react';
import logo from './logo.png'; 
import './index.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={logo} alt="Logo" className="footer-logo" width='50px' height="70px"/>
            <p>Laxmiguda, Hyderabad, Telangana</p>
            <p>Email: tattapallinaresh@gmail.com</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted">© {new Date().getFullYear()} Dream Limited Provider. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
