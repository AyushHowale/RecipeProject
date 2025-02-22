import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container">
        <NavLink className="navbar-brand fw-bold nav-link-custom" to="/">My Recipe</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <NavLink className="nav-link nav-link-custom" to="/home">Home</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link nav-link-custom" to="/recipe">Create Recipe</NavLink>
            </li>
            {!user ? (
              <>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link nav-link-custom" to="/register">Register</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link nav-link-custom" to="/login">Login</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <span className="nav-link nav-link-custom">Hello, {user.email}</span>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-link nav-link nav-link-custom" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;