/*eslint-disable*/
export default function updateStudentGradeByCity (list, city, grade) {
  return list.filter(_ => _.location == city ).map((v) => {
    for (let g of grade) {
        v.grade = "N/A"
      if (g.studentId == v.id) {
        v.grade = g.grade
      }
    }

    return v
  })
}
