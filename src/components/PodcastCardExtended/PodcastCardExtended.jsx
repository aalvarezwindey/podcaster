import React from 'react';
import styles from './PodcastCardExtended.module.css';
import Card from '../Card/Card';

export default function PodcastCardExtended({
  name,
  author,
  imageURL,
  description,
}) {
  return (
    <Card className={styles.card}>
      <div>
        <img alt={`${name} - ${author}`} src={imageURL} />
      </div>
      <hr />
      <h1 title={name}>{name}</h1>
      <p>by {author}</p>
      <hr />
      <h2>Description:</h2>
      <p>{description}</p>
    </Card>
  );
}
