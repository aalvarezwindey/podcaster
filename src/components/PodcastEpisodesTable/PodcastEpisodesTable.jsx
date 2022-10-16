import React from 'react';
import PropTypes from 'prop-types';
import styles from './PodcastEpisodesTable.module.css';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
function PodcastEpisodesTable({ episodes }) {
  return (
    <Card className={styles.card}>
      <table>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        {episodes.map((episode) => {
          const { id, title, duration, releaseDate } = episode;
          return (
            <tr key={title}>
              <td>
                <Link to={`episode/${id}`} state={episode}>
                  {title}
                </Link>
              </td>
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
