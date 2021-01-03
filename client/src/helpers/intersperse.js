function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  const reducer = (acc, x) => acc.concat([sep, x]);

  return arr.slice(1).reduce(reducer, [arr[0]]);
}

export default intersperse;
