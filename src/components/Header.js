import React from 'react';
import { FaSun, FaMoon, FaSignOutAlt } from 'react-icons/fa';
import { auth } from '../firebase'; // Import auth for sign-out functionality

const Header = ({ user, theme, toggleTheme }) => {
  const handleSignOut = () => {
    auth.signOut().catch(error => console.error("Sign out error", error));
  };

  // Get the first initial of the user's name for the fallback avatar
  const getInitial = (name) => {
    if (!name) return '?';
    return name.charAt(0).toUpperCase();
  };

  return (
    <header className="app-header">
      <div className="header-title">
        <h1>Ethical Hacking Course Arena</h1>
        <p>NPTEL Practice Grounds</p>
      </div>
      <div className="header-controls">
        <button onClick={toggleTheme} className="btn theme-toggle-btn">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        {user && (
          <div className="user-profile">
            {/* --- THIS IS THE UPDATED LOGIC --- */}
            {user.photoURL ? (
              <img 
                src={user.photoURL} 
                alt={user.displayName} 
                className="user-avatar" 
                referrerPolicy="no-referrer" // Helps with some Google photo loading issues
              />
            ) : (
              <div className="user-avatar-fallback">
                {getInitial(user.displayName)}
              </div>
            )}
            <span className="user-name">{user.displayName}</span>
            <button onClick={handleSignOut} className="btn sign-out-btn" title="Sign Out">
              <FaSignOutAlt />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;