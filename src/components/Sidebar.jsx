import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { FaUsers, FaBox, FaSignOutAlt } from 'react-icons/fa'; 

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/users">
              <FaUsers className="sidebar-icon" /> Users
            </Link>
          </li>
          <li>
            <Link to="/dashboard/products">
              <FaBox className="sidebar-icon" /> Products
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-button">
              <FaSignOutAlt className="sidebar-icon" /> Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
