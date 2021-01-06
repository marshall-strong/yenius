const defaultCallback = (ele) => ele;

function printList(array, callback = defaultCallback()) {
  const mapped = array.map(callback);
  if (mapped.length <= 1) {
    const list = mapped[0];
    return list;
  }
  const firstEles = mapped.slice(0, -1).join(", ");
  const lastEle = mapped.slice(-1);
  const list = [firstEles, ...lastEle].join(" & ");
  return list;
}

export default printList;
