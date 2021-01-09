export const intersperse = (arr, separator, lastSeparator) => {
  if (arr.length === 0) {
    return [];
  }
  const reducer = (acc, cur, idx, src) => {
    // determines whether to use separator or lastSeparator
    const sep = idx === src.length - 1 ? lastSeparator : separator;
    // add the separator and the current element to the accumulator
    return acc.concat([sep, cur]);
  };
  // pass the first element of arr to the reducer function
  return arr.slice(1).reduce(reducer, [arr[0]]);
};

export const mergeArrays = (array1, array2) => {
  let merge = array1.concat(array2);
  merge.filter((ele, idx) => merge.indexOf(ele) == idx);
  return merge;
};

export const printDate = (dateString) => {
  const date = new Date(dateString);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const day = date.getUTCDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};
