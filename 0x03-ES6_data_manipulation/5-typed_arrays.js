/*eslint-disable*/
export default function createInt8TypedArray (len, pos, val) {
  if (pos >= len)
    throw Error('Position outside range')

  const buff = new DataView(new ArrayBuffer(len))
  buff.setInt8(pos, val)

  return buff
}
