/*eslint-disable*/
export default function getStudentsByLocation(list, city) {
    return list.filter(_ => _.location == city)
}