import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFile, faUser, faChartBar, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidenavbar = () => {
    const [showSidebar, setShowSidebar] = useState(false); // Initially closed
    const navigate = useNavigate();
    const location = useLocation();

    // Function to toggle the sidebar state
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    // Function to handle navigation and close sidebar
    const handleNavigation = (path) => {
        navigate(path);
        // Keep the sidebar open after navigation
        setShowSidebar(true);
    };

    return (
        <>
            <div className={`sidebar ${showSidebar ? '' : 'hidden'}`}>
                {/* Hamburger/Cancel button */}
                <div className="sidebar-toggle">
                    {!showSidebar ? (
                        <button className="hamburger" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    ) : (
                        <button className="cancel-btn" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    )}
                </div>
                {/* Navigation List */}
                <ul>
                    <li className={`sidebar-item ${showSidebar ? '' : 'icon-only'}`}>
                        <Link to="/" className="sidebar-link" onClick={() => handleNavigation('/')}>
                            <FontAwesomeIcon icon={faHome} size="lg" />
                            {showSidebar && <span>Home</span>} {/* Only show text if sidebar is open */}
                        </Link>
                    </li>
                    <li className={`sidebar-item ${showSidebar ? '' : 'icon-only'}`}>
                        <Link to="/upload" className="sidebar-link" onClick={() => handleNavigation('/upload')}>
                            <FontAwesomeIcon icon={faFile} size="lg" />
                            {showSidebar && <span>Upload</span>} {/* Only show text if sidebar is open */}
                        </Link>
                    </li>
                    <li className={`sidebar-item ${showSidebar ? '' : 'icon-only'}`}>
                        <Link to="/leaderboard" className="sidebar-link" onClick={() => handleNavigation('/leaderboard')}>
                            <FontAwesomeIcon icon={faChartBar} size="lg" />
                            {showSidebar && <span>Leaderboard</span>} {/* Only show text if sidebar is open */}
                        </Link>
                    </li>
                    <li className={`sidebar-item ${showSidebar ? '' : 'icon-only'}`}>
                        <Link to="/profile" className="sidebar-link" onClick={() => handleNavigation('/profile')}>
                            <FontAwesomeIcon icon={faUser} size="lg" />
                            {showSidebar && <span>Profile</span>} {/* Only show text if sidebar is open */}
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidenavbar;
