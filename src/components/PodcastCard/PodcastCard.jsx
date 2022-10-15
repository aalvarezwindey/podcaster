import React from 'react';
import styles from './PodcastCard.module.css';

export default function PodcastCard({ name, author, imageURL }) {
  return (
    <article className={styles.card}>
      <img alt={`${name} - ${author}`} src={imageURL} />
      <h2 title={name}>{name}</h2>
      <p>Author: {author}</p>
    </article>
  );
}
