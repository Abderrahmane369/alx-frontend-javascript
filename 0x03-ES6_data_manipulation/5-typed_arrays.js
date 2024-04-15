/*eslint-disable*/
export default function createInt8TypedArray (len, pos, val) {
  const buff = new DataView(new ArrayBuffer(len))

  buff.setInt8(pos, val)

  return buff
}
