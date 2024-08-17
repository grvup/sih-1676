import React from 'react';
import './Logs.css';

function Logs() {
  const logs = [
    { id: 1, message: 'Scraper started', timestamp: '2024-08-17 12:00:00' },
    { id: 2, message: 'Vulnerability found: Chrome', timestamp: '2024-08-17 12:05:00' },
    { id: 3, message: 'Email sent to admin@example.com', timestamp: '2024-08-17 12:10:00' },
  ];

  return (
    <div className="logs">
      <h2>System Logs</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            <span>{log.timestamp}</span>: {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logs;
