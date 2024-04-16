/*eslint-disable*/
export default function cleanSet(set, startString) {
    if (typeof startString !== "string" || startString === "") {
        return "";
    }

    const result = [...set]
        .filter(
            item => typeof item === "string" && item.startsWith(startString)
        )
        .map(item => item.slice(startString.length))
        .join("-");

    return result;
}
