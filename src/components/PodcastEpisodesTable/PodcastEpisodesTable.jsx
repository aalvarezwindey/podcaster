import React from 'react';
import PropTypes from 'prop-types';
import styles from './PodcastEpisodesTable.module.css';
import Card from '../Card/Card';
import { Link, useLocation } from 'react-router-dom';
function PodcastEpisodesTable({ episodes }) {
  const { state } = useLocation();
  return (
    <Card className={styles.card}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => {
            const { id, title, duration, releaseDate } = episode;
            return (
              <tr key={id}>
                <td>
                  <Link to={`episode/${id}`} state={{ ...state, episode }}>
                    {title}
                  </Link>
                </td>
                <td>{releaseDate}</td>
                <td>{duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

PodcastEpisodesTable.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PodcastEpisodesTable;
