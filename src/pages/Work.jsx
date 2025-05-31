import React, { useEffect, useState } from 'react';
import styles from '../App.module.css'; // adjust the path if needed

const videoMap = {
  'cardmatch': '/demos/cardmatch-demo-video.mp4',
  'Project-game': '/demos/chicken-game-demo-video.mp4',
  'Challenge-10': '/demos/employee-commandline-demo.mp4',
  'social-api': '/demos/social-api-demo-video.mp4',
};

const Work = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/isabella-romero/repos')
      .then((response) => response.json())
      .then((data) => {
        const featuredRepos = ['cardmatch', 'Project-game', 'Challenge-10', 'social-api'];
        const filtered = data.filter((repo) =>
          featuredRepos.includes(repo.name)
        );
        setRepos(filtered);
      })
      .catch((error) => console.error('Error fetching repos:', error));
  }, []);

  return (
    <main className={styles.main}>
      <section id="work" className={styles.work}>
        <div className={styles['projects-container']}>
          <h2 style={{ textAlign: 'center', width: '100%' }}>My Work</h2>
          <p style={{ textAlign: 'center', width: '100%' }}>
            🌟 Check out some of my featured GitHub projects below! 🛠️ Tap the demo to jump to the repo 📁, or watch it by unpausing ▶️ and going full screen 🔍📺.
          </p>
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              {videoMap[repo.name] && (
                <div style={{ width: '100%', maxHeight: '200px', overflow: 'hidden' }}>
                  <video
                    src={videoMap[repo.name]}
                    controls
                    muted
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      marginTop: '0.5rem',
                    }}
                  />
                </div>
              )}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Work;
