import React from 'react';
import styles from './App.module.css'; // Adjust if Footer.jsx is located elsewhere

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Isabella Romero. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <a href="mailto:isabella.romero4@yahoo.com">Email</a>
        <a href="https://github.com/isabella-romero" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/isabella-romero-354b57248/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
