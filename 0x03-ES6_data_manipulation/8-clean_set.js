/*eslint-disable*/
export default function cleanSet(set, start) {
    if (!start) return "";

    return [...set]
        .filter(_ => _.substr(0, start.length) == start)
        .map(_ => _.substr(start.length))
        .join("-");
}
