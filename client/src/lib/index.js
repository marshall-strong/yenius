export const basicIntersperse = (arr, sep) => {
  if (arr.length === 0) {
    return [];
  } else {
    const reducer = (acc, x) => acc.concat([sep, x]);
    return arr.slice(1).reduce(reducer, [arr[0]]);
  }
};

export const intersperse = (arr, separator, lastSeparator) => {
  if (arr.length === 0) {
    return [];
  }

  // default separator values
  const sep = separator ? separator : ", ";
  const sepLast = lastSeparator ? lastSeparator : " & ";

  const reducer = (acc, ele, idx, src) => {
    // determines whether to use separator or lastSeparator
    const insert = idx === src.length - 1 ? sepLast : sep;
    // add the separator and the current element to the accumulator
    return acc.concat([insert, ele]);
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

export const logCurrentDomRect = (element) => {
  const domRect = element.getBoundingClientRect();
  console.log(`verseRef.current: `, element);
  console.log(`domRect: `, domRect);
  console.log(`domRect.left: ${domRect.x}`);
  console.log(`domRect.width: ${domRect.width}`);
  console.log(`domRect.right: ${domRect.right}`);
  console.log(`domRect.top: ${domRect.y}`);
  console.log(`domRect.height: ${domRect.height}`);
  console.log(`domRect.bottom: ${domRect.bottom}`);
};
