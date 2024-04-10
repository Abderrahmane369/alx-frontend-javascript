/* eslint-disable */

export default function appendToEachArrayValue(array, appendString) {
  for (const _ of array.entries()) {
    const value = _[1];
    array[_[0]] = appendString + value;
  }

  return array;
}
