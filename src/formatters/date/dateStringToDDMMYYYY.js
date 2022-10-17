function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

export const dateStringToDDMMYYYY = (dateStr = '') => {
  if (!dateStr) return '';

  const date = new Date(dateStr);

  if (isValidDate(date)) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  } else {
    return '';
  }
};
