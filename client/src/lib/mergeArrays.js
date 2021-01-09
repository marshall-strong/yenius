export const mergeArrays = (array1, array2) => {
  let merge = array1.concat(array2);
  merge.filter((ele, idx) => merge.indexOf(ele) == idx);
  return merge;
};
