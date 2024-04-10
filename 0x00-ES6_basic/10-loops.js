export default function appendToEachArrayValue(array, appendString) {
  for (var _ of array.entries()) {
    var value = _[1];
    array[_[0]] = appendString + value;
  }

  return array;
}
