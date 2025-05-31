import React from 'react';
import styles from '../App.module.css'; // Import the styles

const Resume = () => {
  return (
    <section id="resume" className={styles.resumeSection}>
      <div>
        <p className={styles.centerText}>
          Click the image of either the Resume or Certificate to view the PDF version of each!
        </p>
        <div className={styles.imageGrid}>
          <a href="/resume/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="images/resume-image.png"
              alt="Resume"
              className={styles.documentImage}
            />
          </a>

          <a href="/resume/Coding-Certification.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="images/certificate-image.png"
              alt="Coding Certification"
              className={styles.documentImage}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
