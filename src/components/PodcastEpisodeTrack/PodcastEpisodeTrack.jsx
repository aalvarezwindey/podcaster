import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './PodcastEpisodeTrack.module.css';

function PodcastEpisodeAudioLoadingPlaceholder() {
  return (
    <div className={[styles.audioPlaceholder, styles.shimmer].join(' ')}>
      Loading audio...
    </div>
  );
}

function PodcastEpisodeTrack({ title, description, mediaUrl }) {
  const [canPlay, setCanPlay] = useState(false);
  return (
    <Card className={styles.card}>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <hr />
      <audio
        controls
        onCanPlay={() => setCanPlay(true)}
        style={{ display: canPlay ? 'block' : 'none' }}
      >
        <source src={mediaUrl} />
      </audio>
      {canPlay ? null : <PodcastEpisodeAudioLoadingPlaceholder />}
    </Card>
  );
}

PodcastEpisodeTrack.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mediaUrl: PropTypes.string.isRequired,
};

export default PodcastEpisodeTrack;
