import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faFile, faChartBar, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Sidenavbar from './Sidenavbar'; // Make sure this path is correct

function Leaderboardpg() {
  const [showSidebar, setShowSidebar] = useState(true);

  const currentSemesterData = [
    { name: 'Mr. KAMALAKANAN', exp: 599 },
    { name: 'Mr. RAMASAMY', exp: 430 },
    { name: 'Mr. ANDREA', exp: 329 },
    { name: 'User 4', exp: 290 },
    { name: 'User 5', exp: 260 },
    { name: 'User 6', exp: 240 },
    { name: 'User 7', exp: 220 },
    { name: 'User 8', exp: 200 },
    { name: 'User 9', exp: 180 },
    { name: 'User 10', exp: 160 },
  ];

  const semesterBestData = [
    { name: 'Mr. KAMALAKANAN', exp: 650 }, // User's best score
    { name: 'Alice Johnson', exp: 580 },
    { name: 'Bob Smith', exp: 520 },
    { name: 'Charlie Brown', exp: 480 },
    { name: 'Daisy Ridley', exp: 450 },
    { name: 'Evelyn Morales', exp: 420 },
    { name: 'Follower 7', exp: 400 },
    { name: 'Follower 8', exp: 380 },
    { name: 'Follower 9', exp: 360 },
    { name: 'Follower 10', exp: 340 },
  ];

  return (
    <div className="container">
      <Sidenavbar />
      <div className="main-content">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src="search-interface-symbol.png" alt="Search Icon" className="search-icon" />
        </div>
        <div className="top-three">
          <div className="top-item">
            <img src="Gold (1).png" alt="Gold Crown" className="crown" />
            <img src="1.jpeg" alt="User 1" className="user-image" />
            <p>Mr. KAMALAKANAN</p>
            <p>Exp:599</p>
          </div>
          <div className="top-item ramsamy">
            <img src="Silver.png" alt="Silver Crown" className="crown" />
            <img src="2.jpeg" alt="User 2" className="user-image" />
            <p>Mr. RAMASAMY</p>
            <p>Exp:430</p>
          </div>
          <div className="top-item andrea">
            <img src="Bronze.png" alt="Bronze Crown" className="crown" />
            <img src="3.jpg" alt="User 3" className="user-image" />
            <p>Mr. ANDREA</p>
            <p>Exp:329</p>
          </div>
        </div>

        <div className="leaderboard-module">
          <h2 className="module-title">Current Semester</h2>
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Exp Points</th>
              </tr>
            </thead>
            <tbody>
              {currentSemesterData.map((user, index) => (
                <tr key={index}>
                  <td>#{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.exp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="leaderboard-module">
          <h2 className="module-title">Semester Best</h2>
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Exp Points</th>
              </tr>
            </thead>
            <tbody>
              {semesterBestData.map((user, index) => (
                <tr key={index}>
                  <td>#{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.exp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Leaderboardpg;