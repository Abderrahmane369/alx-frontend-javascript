/*eslint-disable*/
export default function updateStudentGradeByCity(list, city, newGrades) {
    return list
      .filter(student => student.location === city)
      .map(student => {
        const gradeObj = newGrades.filter(grade => grade.studentId === student.id);
        return {
          ...student,
          grade: gradeObj.length > 0 ? gradeObj[0].grade : 'N/A',
        };
      });
  }