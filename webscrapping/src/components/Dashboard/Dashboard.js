import React from 'react';
import './Dashboard.css';
import dashboardStats from './Dashboardstats.json'; 

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>System Overview</h2>
      <div className="dashboard-stats">
        {dashboardStats.map((stat, index) => (
          <div key={index} className="stat">
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
