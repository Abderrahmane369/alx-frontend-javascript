/*eslint-disable*/

export default function getResponseFromAPI() {
  return new Promise((res, rej) => {
    if (5 > 2) {
        res("G")
    }
    else
        rej(Error("EO"))
  });
}
