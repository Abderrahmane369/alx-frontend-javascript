/*eslint-disable*/

export default function appendToEachArrayValue(array, appendString) {
  for (const _ of array) {
    const value = _;
    array[array.indexOf(value)] = appendString + array[array.indexOf(value)];
  }

  return array;
}
