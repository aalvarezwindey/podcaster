import React from 'react';
import styles from './Card.module.css';

export default function Card({ children, className = '', ...rest }) {
  return (
    <article className={[styles.card, className].join(' ')} {...rest}>
      {children}
    </article>
  );
}
