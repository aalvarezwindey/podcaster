import React from 'react';
import PropTypes from 'prop-types';
import styles from './PodcastEpisodesTable.module.css';
import Card from '../Card/Card';
function PodcastEpisodesTable({ episodes }) {
  return (
    <Card className={styles.card}>
      <table>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        {episodes.map(({ title, duration, releaseDate }) => {
          return (
            <tr key={title}>
              <td>{title}</td>
              <td>{releaseDate}</td>
              <td>{duration}</td>
            </tr>
          );
        })}
      </table>
    </Card>
  );
}

PodcastEpisodesTable.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PodcastEpisodesTable;
