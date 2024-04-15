/*eslint-disable*/
export default function updateStudentGradeByCity(students, city, newGrades = []) {
    const gradesMap = new Map(newGrades.map(g => [g.studentId, g.grade]));
   
    return students
       .filter(student => student.location === city)
       .map(student => ({
         ...student,
         grade: gradesMap.has(student.id) ? gradesMap.get(student.id) : 'N/A'
       }));
   }
