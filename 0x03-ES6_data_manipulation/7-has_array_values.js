/*eslint-disable*/
export default function hasValuesFromArray (set, arr) {
  return arr.every(_ => set.has(_));
};
