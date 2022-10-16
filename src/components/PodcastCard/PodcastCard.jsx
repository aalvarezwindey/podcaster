import React from 'react';
import Card from '../Card/Card';
import styles from './PodcastCard.module.css';

export default function PodcastCard({ name, author, imageURL, onClick }) {
  return (
    <Card className={styles.card} onClick={onClick}>
      <img alt={`${name} - ${author}`} src={imageURL} />
      <h2 title={name}>{name}</h2>
      <p>Author: {author}</p>
    </Card>
  );
}
