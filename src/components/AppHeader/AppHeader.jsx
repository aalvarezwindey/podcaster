import React, { useLayoutEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './AppHeader.module.css';

const NAVIGATION_ANIMATION_DURATION = 500;

export default function AppHeader() {
  const [
    showClientSideNavigationAnimation,
    setShowClientSideNavigationAnimation,
  ] = useState(false);
  const location = useLocation();
  useLayoutEffect(() => {
    setShowClientSideNavigationAnimation(true);
    const timer = setTimeout(() => {
      setShowClientSideNavigationAnimation(false);
    }, NAVIGATION_ANIMATION_DURATION);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">Podcaster</Link>
      </h1>
      {showClientSideNavigationAnimation ? <div /> : null}
    </header>
  );
}
