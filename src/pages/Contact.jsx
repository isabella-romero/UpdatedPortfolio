import React from 'react';
// import styles from '../App.module.css'; // Make sure you adjust the path if needed
import styles from '../Contact.module.css'; // Import specific styles for Contact page

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div>
        <h2>Contact Me</h2>
        <p>Feel free to view my GitHub, LinkedIn, or even reach out via email!</p>
      </div>

      <div className={styles.contactIcons}>
        <a
          href="https://github.com/isabella-romero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/logos/github_PNG.png"
            alt="GitHub"
            className={styles.contactIcon}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/isabella-romero-354b57248/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/logos/linkedinlogo.png"
            alt="LinkedIn"
            className={styles.contactIcon}
          />
        </a>

        <a href="mailto:isabella.romero4@yahoo.com">
          <img
            src="/logos/email_logo.png"
            alt="Email"
            className={styles.contactIcon}
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
