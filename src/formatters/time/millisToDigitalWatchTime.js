export const millisToDigitalWatchTime = (millis = 0) => {
  let seconds = millis / 1000;
  const hours = parseInt(seconds / 3600);
  seconds = Math.ceil(seconds % 3600); // substract hours
  const minutes = parseInt(seconds / 60);
  seconds = Math.ceil(seconds % 60); // substract minutes

  const hoursStr = hours ? `${hours}:` : '';
  const minutesStr = minutes ? `${String(minutes).padStart(2, '0')}:` : '00:';
  const secondsStr = String(seconds).padStart(2, '0');
  return `${hoursStr}${minutesStr}${secondsStr}`;
};
