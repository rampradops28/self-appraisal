import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepg from './Components/Homepg.jsx';
import Uploadpg from './Components/Uploadpg.jsx'; 
import Leaderboardpg from './Components/Leaderboardpg.jsx'; 
import Profilepg from './Components/Profilepg.jsx'; 
import './App.css'
import './css/Homepg.css'
import './css/uploadpg.css'
import './css/leaderboardpg.css'
import './css/Profilepg.css'
import './css/Sidenavbar.css'
 

function App() {
  return (
    <>   
      <Routes>
        <Route path="/" element={<Homepg />} />
        <Route path="/upload" element={<Uploadpg />} />
        <Route path="/leaderboard" element={<Leaderboardpg />} />
        <Route path="/profile" element={<Profilepg />} />
      </Routes> 
    </>
    
  );
}

export default App;