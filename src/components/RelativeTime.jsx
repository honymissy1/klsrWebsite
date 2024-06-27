import React from 'react';

const RelativeTime = ({ date }) => {
  const getRelativeTime = (date) => {
    const now = new Date();
    const then = new Date(date);
    const diffInSeconds = Math.round((now - then) / 1000);

    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    if (diffInSeconds < 60) {
      return rtf.format(-diffInSeconds, 'seconds');
    } else if (diffInSeconds < 3600) {
      return rtf.format(-Math.round(diffInSeconds / 60), 'minutes');
    } else if (diffInSeconds < 86400) {
      return rtf.format(-Math.round(diffInSeconds / 3600), 'hours');
    } else if (diffInSeconds < 2592000) {
      return rtf.format(-Math.round(diffInSeconds / 86400), 'days');
    } else if (diffInSeconds < 31536000) {
      return rtf.format(-Math.round(diffInSeconds / 2592000), 'months');
    } else {
      return rtf.format(-Math.round(diffInSeconds / 31536000), 'years');
    }
  };

  return <div>{getRelativeTime(date)}</div>;
};

export default RelativeTime;
