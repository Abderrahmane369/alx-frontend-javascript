/*eslint-disable*/
export default function getStudentIdsSum (l) {
  return l.reduce((t, c) => t + c.id, 0);
};
