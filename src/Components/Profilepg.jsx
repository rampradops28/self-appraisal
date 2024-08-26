import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faFile, faChartBar, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import Chart from 'chart.js/auto'; // Import Chart.js
import { Link } from 'react-router-dom';
import Sidenavbar from './Sidenavbar';
function Profilepg() {
  const [showSidebar, setShowSidebar] = useState(false);
  const chartCanvasRef = useRef(null); // Reference to the canvas element

  const createChart = () => {
    const ctx = chartCanvasRef.current.getContext('2d');

    if (ctx) {
      // Destroy existing chart if any
      const existingChart = Chart.getChart(chartCanvasRef.current);
      if (existingChart) {
        existingChart.destroy();
      }

      const contributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Research Papers', 'Conferences', 'Books', 'Teaching', 'Other'],
          datasets: [{
            label: 'Contributions',
            data: [10, 5, 2, 15, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };

  // Create the chart when the canvas element is available (mounted)
  useEffect(() => {
    if (chartCanvasRef.current) { 
      createChart();
    }
  }, []); // Run only once on mount

  return (
    <div className="container">
      <Sidenavbar />
      <div className="main-content"> 
        <div className="profile-header"> 
          <div className="profile-info">
            <div className="profile-picture">
              <img src="blank-profile-picture-973460_640.webp" alt="Profile Picture" />
            </div>
            <div>
              <h1 className="profile-name">Faculty</h1>
              <p className="profile-email">abcd@gmail.com</p>
            </div>
          </div>
          <button className="edit-button">Edit</button>
        </div>

        <div className="content-section"> 
          <div className="form-section">
            <div>
              <label htmlFor="fullName">Name</label>
              <input type="text" id="fullName" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="id">User ID</label>
              <input type="text" id="id" placeholder="Your ID" />
            </div>
            <div>
              <label htmlFor="language">Aadhar Number</label>
              <input type="text" id="language" placeholder="Enter Number" />
            </div>
            <div className="email-section">
              <h5>My Posts & Images</h5>
              <div className="email-item">
                <img src="blank-profile-picture-973460_640.webp" alt="Post Image" className="email-icon" />
                <div>
                  <p className="email">Exciting news! We've published a new research paper on... </p>
                  <span className="time">1 month ago</span>
                </div>
              </div>
              <button className="add-email-button">+ Add Post or Image</button>
            </div>
          </div>
          <div className="chart-section">
            <div>
              <label htmlFor="nickName">Department</label>
              <input type="text" id="nickName" placeholder="Enter Department" />
            </div>
            <div>
              <label htmlFor="exp">Experience</label>
              <input type="text" id="exp" placeholder="Your Experience" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="Your Number" />
            </div>
            <div className="contribution-chart">
              <h4>Contributions</h4>
              <canvas id="contributionChart" ref={chartCanvasRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profilepg;