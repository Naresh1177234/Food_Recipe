import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Number</h5>
              <p className="card-text">6281529933</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">tattapallinaresh@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Instagram</h5>
              <p className="card-text">xyzusername</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
