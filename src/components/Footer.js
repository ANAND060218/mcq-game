import React from 'react';
import { FaGithub, FaStar } from 'react-icons/fa';

const Footer = () => {
  // IMPORTANT: Replace these with your actual GitHub username and repo name
  const githubUsername = 'ANAND060218';
  const repoName = 'mcq-game';

  return (
    <footer className="app-footer">
      <p>Crafted for the NPTEL Ethical Hacking Exam.
        If you find this helpfull in exam upvote and follow on Github</p>
      <div className="footer-links">
        <a
          href={`https://github.com/${githubUsername}/${repoName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <FaStar /> Upvote (Star) on GitHub
        </a>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <FaGithub /> Follow Me
        </a>
      </div>
      {/* --- COPYRIGHT TEXT ADDED HERE --- */}
      <div className="copyright-text">
        © 2025 Anand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;