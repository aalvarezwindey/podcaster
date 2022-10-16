import React from 'react';
import styles from './PodcastCardExtended.module.css';
import Card from '../Card/Card';
import { Link, useLocation } from 'react-router-dom';

export default function PodcastCardExtended({
  id,
  name,
  author,
  imageURL,
  description,
}) {
  const { state } = useLocation();
  return (
    <Card className={styles.card}>
      <div>
        <Link to={`/podcast/${id}`} state={state}>
          <img alt={`${name} - ${author}`} src={imageURL} />
        </Link>
      </div>
      <hr />
      <Link to={`/podcast/${id}`} state={state}>
        <h1 title={name}>{name}</h1>
      </Link>
      <p>by {author}</p>
      <hr />
      <h2>Description:</h2>
      <p>{description}</p>
    </Card>
  );
}
