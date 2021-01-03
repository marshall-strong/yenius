function intersperse(arr, separator, lastSeparator) {
  if (arr.length === 0) {
    return [];
  }
  // separator = separator || ", ";
  // lastSeparator = lastSeparator || separator;

  const reducer = (acc, cur, idx, src) => {
    const sep = idx === src.length - 1 ? lastSeparator : separator;
    return acc.concat([sep, cur]);
  };

  return arr.slice(1).reduce(reducer, [arr[0]]);
}

export default intersperse;
