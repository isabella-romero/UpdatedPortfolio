import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import './App.css';
import styles from './App.module.css';

import About from './pages/About.jsx';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import Footer from './Footer';

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div
      className={`${styles.container} ${isHome ? styles.homeBackground : ''}`}
    >
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <h1 className={styles.gradientText}>Isabella's Portfolio</h1>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : ''
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? styles.active : ''
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/work"
                  className={({ isActive }) =>
                    isActive ? styles.active : ''
                  }
                >
                  My Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? styles.active : ''
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    isActive ? styles.active : ''
                  }
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <hr className={styles.headerLine} />
      </header>

      <main className={styles.main}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/"
            element={
              <div className={styles.landing}>
                <div className={styles.landingText}>
                <h2>Hi, I'm Isabella Romero. Welcome to My Portfolio</h2>
                <h3>Full-Stack Developer | JavaScript | React | Node.js</h3>
                <p>Select a page from the navigation above.</p>
                </div>

                <section className={styles.skillsSection}>
                  <h2>Technical Skills</h2>
                  <ul className={styles.skillsList}>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>RESTful APIs</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                  </ul>
                </section>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
