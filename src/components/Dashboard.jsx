import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Users from '../pages/Users';
import Products from '../pages/Products';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>DASHBOARD</h1>
          <p>@Kharlou</p>
        </header>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
        <div className="dashboard-main">
          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
