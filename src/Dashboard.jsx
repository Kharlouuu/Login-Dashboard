// src/components/Dashboard.js
import React from 'react';
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Sidebar />
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </div>
      <div className="content">
        <h2>Welcome to the dashboard!</h2>
      </div>
    </div>
  );
};

export default Dashboard;