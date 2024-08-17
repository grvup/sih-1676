import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn, user }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">
          <h1>Vulnerability Monitoring System</h1>
        </div>
        <button className="navbar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <div className={`navbar-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <ul className="navbar-menu">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/vulnerabilities">Vulnerabilities</Link></li>
            <li><Link to="/scraper-control">Scraper Control</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/logs">Logs</Link></li>
          </ul>
          <div className="navbar-user-info">
            {isLoggedIn ? (
              <span>Welcome, {user.name}</span>
            ) : (
              <span>Gaurav</span>
            )}
          </div>
        </div>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <button className="sidebar-close" onClick={toggleSidebar}>
            ×
          </button>
          <ul className="sidebar-menu">
            <li><Link to="/" onClick={toggleSidebar}>Dashboard</Link></li>
            <li><Link to="/vulnerabilities" onClick={toggleSidebar}>Vulnerabilities</Link></li>
            <li><Link to="/scraper-control" onClick={toggleSidebar}>Scraper Control</Link></li>
            <li><Link to="/settings" onClick={toggleSidebar}>Settings</Link></li>
            <li><Link to="/logs" onClick={toggleSidebar}>Logs</Link></li>
            <li className="sidebar-user-info">
              {isLoggedIn ? (
                <span>Welcome, {user.name}</span>
              ) : (
                <span>Gaurav</span>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
