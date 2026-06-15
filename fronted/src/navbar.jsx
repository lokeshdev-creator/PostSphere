import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router"; // Keeps your native import path intact

const Navbar = () => {
  // States to handle dropdown visibility and simulated authentication state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Toggle to true to see the Logout state

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
    // Add any token clearing or context resets here
  };

  return (
    <nav className="navbar-custom" style={{ position: "relative" }}>
      <div className="logo-section">
        <img src="src/assets/logo.png" alt="PostSphere" className="logo" />
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" className={({ isActive }) => (isActive ? "active" : "")}>
            My Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="right-section d-flex align-items-center gap-3">
        <NavLink to="/newpost">
          <button className="create-btn">
            Create Post <AddIcon />
          </button>
        </NavLink>
        
        {/* Wrapper for the Avatar and absolute dropdown alignment */}
        <li className="nav-item position-relative" style={{ listStyle: "none" }}>
          <Avatar
            alt="User"
            src="/static/images/avatar/3.jpg"
            onClick={toggleDropdown}
            style={{
              width: "50px",
              height: "50px",
              border: "2px solid #334155",
              cursor: "pointer",
            }}
          />

          {/* Conditional Dropdown Box matching your theme */}
          {dropdownOpen && (
            <div 
              className="position-absolute end-0 mt-2 p-2 rounded-3 shadow-lg border border-secondary border-opacity-20 text-start" 
              style={{ background: '#111827', width: '150px', zIndex: 1000 }}
            >
              {!isLoggedIn ? (
                <>
                  <NavLink 
                    to="/login" 
                    className="d-block text-white text-decoration-none p-2 rounded hover-effect small"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink 
                    to="/signup" 
                    className="d-block text-white text-decoration-none p-2 rounded hover-effect small"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Signup
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink 
                    to="/profile" 
                    className="d-block text-white text-decoration-none p-2 rounded hover-effect small"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </NavLink>
                  <div className="border-top border-secondary border-opacity-20 my-1"></div>
                  <button 
                    onClick={handleLogout} 
                    className="w-100 text-start text-danger bg-transparent border-0 p-2 rounded hover-effect small"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
