import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [email, setEmail] = useState('admin@example.com');
  const [frequency, setFrequency] = useState('daily');

  const handleSaveSettings = () => {
    // Logic to save settings
    console.log('Settings saved:', { email, frequency });
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <label>Email Notification</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Scrape Frequency</label>
      <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
}

export default Settings;
