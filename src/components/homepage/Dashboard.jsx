import React from "react";
import "../../App.css";
import logoImg from "../../assests/logo.png";
const Dashboard = () => {
  return (
    <div className="main">
      <div className="upperText">
        <p>Welcome to,</p>
        
        <img
          src={logoImg}
          alt="logoImage"
          className="logo"
        />
        <p>Summarizer</p>
      </div>
    </div>
  );
};

export default Dashboard;
