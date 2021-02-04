import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const timeAgo = (timestamp) => {
  const date = parseISO(timestamp);
  const timePeriod = formatDistanceToNow(date);
  return `${timePeriod} ago`;
};

const TimeAgo = ({ timestamp }) => {
  if (!timestamp) {
    return null;
  }
  return <span title={timestamp}>{timeAgo(timestamp)}</span>;
};

export default TimeAgo;
