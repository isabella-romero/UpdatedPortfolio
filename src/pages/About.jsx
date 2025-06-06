import React from 'react';
import styles from '../App.module.css'; // adjust path if needed

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <img 
          src="/images/self-portrait.PNG" 
          alt="A portrait of Isabella" 
          className={styles.selfPortrait}
        />
        <div className={styles.aboutText}>
        <h2>About Me</h2>
<p>
  Hi! I'm Isabella Romero, a passionate software developer. I recently completed a full-stack web development bootcamp through EdX and Rice University. I built this portfolio from scratch to showcase my skills — from crafting engaging UIs to working on powerful backends. These past six months have been full of growth, and I’m excited to bring what I’ve learned into real-world projects.
</p>

<h2>My Coding Journey</h2>
<p>
  My experience includes HTML/CSS, JavaScript, Web APIs, Node.js, TypeScript, SQL, and full-stack development with React and the MERN stack — plus implementing authentication and deploying applications. I've also collaborated on team projects and love building projects from the ground up. Some of my favorite projects include full-stack apps and fun, interactive games.
</p>
        </div>
      </div>
    </section>
  );
};

export default About;
