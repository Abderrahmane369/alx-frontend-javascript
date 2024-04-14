/*eslint-disable*/
export default function divideFunction(numerator, denominator) {
    try {
        if (!denominator)
            throw Error("cannot divide by 0")

        return numerator / denominator;
    }

    catch (err) {
        throw err;
    }

}