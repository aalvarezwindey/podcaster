import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AppHeader.module.css';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">Podcaster</Link>
      </h1>
    </header>
  );
}
