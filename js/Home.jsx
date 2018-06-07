import React from 'react';
import ProjectButton from './Button';
import styles from './Home.css';

const Home = () => (
  <div className={styles.mainLanding}>
    <div className={styles.header}>
      <img className={styles.six} src="public/6.png" alt="6" />
    </div>
    <h1 className={styles.something}>
      <span>studio six</span>
    </h1>
    <h2 className={styles.something}>
      <span>Full stack Developer & Designer based in London</span>
    </h2>
    <ProjectButton name="Projects" link="/projects" />
  </div>
);
export default Home;
