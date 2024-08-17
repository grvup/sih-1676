import React from 'react';
import './ScrapControl.css';

function ScraperControl() {
  const handleStartScraper = () => {
    // Logic to start the scraper
    console.log('Scraper started');
  };

  const handleStopScraper = () => {
    // Logic to stop the scraper
    console.log('Scraper stopped');
  };

  return (
    <div className="scraper-control">
      <h2>Scraper Control</h2>
      <button onClick={handleStartScraper}>Start Scraper</button>
      <button onClick={handleStopScraper}>Stop Scraper</button>
    </div>
  );
}

export default ScraperControl;
