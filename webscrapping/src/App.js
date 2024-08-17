import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Logs from './components/Logs/Logs';
import Navbar from './components/Navbar/Navbar';
import ScraperControl from './components/Scrapertool/ScrapControl';
import Settings from './components/Settings/Settings';
import Vulnerabilities from './components/Vulnerabilities/Vulnerabilities';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{"margin":"20px 0 0 0"}}>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vulnerabilities" element={<Vulnerabilities />} />
          <Route path="/scraper-control" element={<ScraperControl />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
