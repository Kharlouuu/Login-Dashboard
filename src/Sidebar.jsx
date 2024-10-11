// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Bootstrap Sidebar</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;