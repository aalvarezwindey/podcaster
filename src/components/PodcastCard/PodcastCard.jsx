import React from 'react';
import Card from '../Card/Card';
import Shimmer from '../Shimmer/Shimmer';
import styles from './PodcastCard.module.css';

export function PodcastCardShimmer() {
  return (
    <Card className={styles.shimmerCard}>
      <Shimmer width="170px" height="170px" borderRadius="50%" />
      <Shimmer width="282px" height="195px" />
    </Card>
  );
}

export default function PodcastCard({ name, author, imageURL, onClick }) {
  return (
    <Card className={styles.card} onClick={onClick}>
      <img alt={`${name} - ${author}`} src={imageURL} />
      <h2 title={name}>{name}</h2>
      <p>Author: {author}</p>
    </Card>
  );
}
