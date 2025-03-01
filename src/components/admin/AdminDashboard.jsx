import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Link for navigation

const AdminDashboard = () => {
  return (
    <div className='container'>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Admin Dashboard</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/allProducts">All Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/allUsers">All Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mt-5">
        <h2>Welcome to Admin Dashboard</h2>
        <Outlet/>
        {/* Add content here depending on the route */}
      </div>
    </div>
  );
};

export default AdminDashboard;
