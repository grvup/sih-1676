import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin
import './Vulnerabilities.css';

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels // Register the plugin
);

function Vulnerabilities() {
  const vulnerabilities = [
    { id: 1, productName: 'Chrome', severity: 'High', description: 'The N-able PassPortal extension...', mitigation: 'Install patch', date: 'Jan 2024' },
    { id: 2, productName: 'Windows 10', severity: 'Critical', description: 'Remote code execution vulnerability...', mitigation: 'Apply latest update', date: 'Feb 2024' },
    { id: 3, productName: 'Linux Kernel', severity: 'Low', description: 'Local privilege escalation...', mitigation: 'Update kernel', date: 'Mar 2024' },
    { id: 4, productName: 'Apache Server', severity: 'High', description: 'Denial of service attack...', mitigation: 'Apply latest patch', date: 'Apr 2024' },
    { id: 5, productName: 'Firefox', severity: 'Critical', description: 'Memory corruption vulnerability...', mitigation: 'Update browser', date: 'May 2024' },
    { id: 6, productName: 'MySQL', severity: 'Low', description: 'SQL injection vulnerability...', mitigation: 'Sanitize inputs', date: 'Jun 2024' },
    { id: 7, productName: 'Android OS', severity: 'High', description: 'Remote code execution...', mitigation: 'Apply security patch', date: 'Jul 2024' },
  ];

  // Count vulnerabilities by severity
  const severityCounts = {
    High: vulnerabilities.filter(vuln => vuln.severity === 'High').length,
    Critical: vulnerabilities.filter(vuln => vuln.severity === 'Critical').length,
    Low: vulnerabilities.filter(vuln => vuln.severity === 'Low').length,
  };

  // Prepare data for the pie chart
  const data = {
    labels: ['High', 'Critical', 'Low'],
    datasets: [
      {
        label: 'Vulnerabilities by Severity',
        data: [severityCounts.High, severityCounts.Critical, severityCounts.Low],
        backgroundColor: ['#f39c12', '#e74c3c', '#3498db'],
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed) {
              label += context.parsed + ' vulnerabilities';
            }
            return label;
          },
        },
      },
      legend: {
        labels: {
          font: {
            size: 16, // Increase legend font size
          },
        },
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 14, // Adjust the size of the data labels
        },
        formatter: (value) => value, // Show the value directly
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow resizing the chart based on container
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="vulnerabilities">
      <h2>Vulnerabilities</h2>
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Severity</th>
            <th>Description</th>
            <th>Mitigation</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {vulnerabilities.map(vuln => (
            <tr key={vuln.id}>
              <td>{vuln.productName}</td>
              <td>{vuln.severity}</td>
              <td>{vuln.description}</td>
              <td>{vuln.mitigation}</td>
              <td>{vuln.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vulnerabilities;
