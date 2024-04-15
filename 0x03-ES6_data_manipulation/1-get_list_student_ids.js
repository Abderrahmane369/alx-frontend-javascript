/*eslint-disable*/
export default function getListStudentIds (list) {
  if (!Array.isArray(list))
    return []

  return list.map((l) => l.id)
}
