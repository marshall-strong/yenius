function printDate(dateString) {
  const date = new Date(dateString);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const day = date.getUTCDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

export default printDate;
