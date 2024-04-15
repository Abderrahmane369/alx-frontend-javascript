/*eslint-disable*/
export default function cleanSet(set, start) {
    if (!start) return "";

    return [...set]
        .filter(_ => _.includes(start))
        .map(_ => _.replace(start, ""))
        .join("-");
}
