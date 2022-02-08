import React from 'react';
import logo from './logo.svg';
import './App.css';

var arrow="<"
var rightarrow=">"
var status = {
  1: 'suspended',
  2: 'completed',
  3: 'cancelled',
}
const Appointment = {
  Name: "Alan Ford",
  EmployeeID: "00005152",
  appointment: new Date().toLocaleDateString(),
  Email: "alan.form@gmail.nl",
  Phone: "+31123456789",
  Status:"In Process",
  Door:"Mark",
  Time:new Date().toLocaleTimeString(),
  Date:new Date().toLocaleDateString(),
  logo: 'https://www.w3schools.com/howto/img_avatar.png',
  title: 'About the Employee',
  description: "Trusted results for Iit Analytics Course. Check Visymo Search for the best results! Unlimited Access."
  }

function App() {
  return (
    <div className="site-container">
      {
        /* Start Your code here */
        <>
          <header>
            <a href="#"><div className="arrow"> {arrow} </div></a>
            <div className="Name-id">
              <strong>{Appointment.Name}</strong>
              <span>{Appointment.EmployeeID}</span>
            </div>
            <div className="last-div">
              <button>Print</button>
            </div>
          </header>
      
      <div className="customer-info">
            <div className="infoSection">
              <strong>Appointment on</strong>
              <span>9:00AM ({Appointment.appointment})</span>
            </div>
            <div className="infoSection">
              <strong>Email:</strong>
              <span>{Appointment.Email}</span>
            </div>
            <div className="infoSection">
              <strong>Phone</strong>
              <span>{Appointment.Phone}</span>
            </div>
          </div>
      <div className="order-info">
            <div className="status1">
              <strong>Status</strong>
              <ul>
                <li>{Appointment.Status}</li>
              </ul>
            </div>
            <div className="status">
              <strong>Door</strong>
              <span>{Appointment.Door}</span>
            </div>
            <div className="status">
              <strong>Time</strong>
              <div>
                <span>{Appointment.Time} ({Appointment.Date})</span>
              </div>
            </div>
          </div>
      <div className="product-info">
            <div className="lastSection">
              <input type="checkbox"></input>
            </div>
            <div className="lastSection">
              <img src={Appointment.logo} width="100" height="100"alt="profile_pic"/>
            </div>
            <div className="lastSection">
              <strong>{Appointment.title}</strong>
              <p>{Appointment.description}</p>
            </div>
            <a href="#"><div className="lastSection arrow">{rightarrow}</div></a>
          </div>
        </>
      }
      </div>
  );
}

export default App;
