/*eslint-disable*/
export default function updateStudentGradeByCity (list, city, grade) {
  if (Array.isArray(list))
    return []

  return list.filter(_ => _.location == city ).map((v) => {
    v.grade = "N/A"
    for (let g of grade) {
      if (g.studentId == v.id) {
        v.grade = g.grade
      }
    }

    return v
  })
}
