export function getTimeAgoMessage(eventTimestamp: string) {
    const eventDate = +new Date(eventTimestamp);

  // Get the current date and time
  const currentDate = +new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = +currentDate - +eventDate;

  // Convert milliseconds to seconds
  const seconds = Math.floor(timeDifference / 1000);

  // Convert seconds to minutes
  const minutes = Math.floor(seconds / 60);

  // Convert minutes to hours
  const hours = Math.floor(minutes / 60);

  // Convert hours to days
  const days = Math.floor(hours / 24);

  // Calculate months and years
  const months = Math.floor(days / 30); // Approximate value for months
  const years = Math.floor(days / 365); // Approximate value for years

  if (years > 0) {
    return `${years} year${years === 1 ? '' : 's'} ago`;
  } else if (months > 0) {
    return `${months} month${months === 1 ? '' : 's'} ago`;
  } else if (days > 0) {
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else {
    return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
  }
}