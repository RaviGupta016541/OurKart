import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { store } from "../../App";

const Header = () => {
  const { cart, user, setUser } = useContext(store);
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    setUser({}); // Clear user data in context (you can also clear from localStorage if using it)
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand text-primary fw-bold">
          OurKart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-dark">
                Contact Us
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Cart */}
            <li className="nav-item">
              <Link to="/cart" className="text-decoration-none">
                <button className="btn btn-outline-primary position-relative mx-3">
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-circle">
                    {cart.length}
                  </span>
                  <i className="bi bi-cart"></i> Cart
                </button>
              </Link>
            </li>

            {/* Login/Logout */}
            <li className="nav-item">
              {user.username ? (
                <>
                  <span className="me-2 text-dark">Hello, {user.username}</span>
                  <button className="btn btn-outline-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <button className="btn btn-outline-primary" onClick={() => navigate('/login')}>
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
