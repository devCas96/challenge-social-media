/**
 * Get the current date and time as a JavaScript Date object.
 *
 * @returns {Date} The current date and time.
 */
export function stringToDate(date) {
  return new Date(date);
}

/**
 * Format a JavaScript Date object as a string in "YYYY-MM-DD" format.
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
export default function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
