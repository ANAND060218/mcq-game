import React, { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaSignOutAlt } from 'react-icons/fa';
import { auth } from '../firebase';

const Header = ({ user, theme, toggleTheme }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    auth.signOut().catch(error => console.error("Sign out error", error));
  };

  const getInitial = (name) => {
    if (!name) return '?';
    return name.charAt(0).toUpperCase();
  };

  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="app-header">
      <div className="header-title">
        <h1>Ethical Hacking Course Arena</h1>
        <p>NPTEL Practice Grounds</p>
      </div>
      <div className="header-controls">
        <button onClick={toggleTheme} className="btn theme-toggle-btn" aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        {user && (
          <div className="user-profile" ref={dropdownRef}>
            <button className="user-profile-trigger" onClick={() => setDropdownOpen(!isDropdownOpen)}>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="user-avatar"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="user-avatar-fallback">
                  {getInitial(user.displayName)}
                </div>
              )}
              <span className="user-name">{user.displayName}</span>
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={handleSignOut} className="dropdown-item">
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
