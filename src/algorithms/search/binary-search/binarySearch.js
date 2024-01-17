/**
 * Binary search implementation.
 * @param {*[]} sortedArray
 * @param {*} item
 * @return {number} index of item in sortedArray or -1
 */

export default function binarySearch(sortedArray, item) {
  let lowB = 0;
  let highB = sortedArray.length - 1;

  while (lowB <= highB) {
    const mid = Math.floor((lowB + highB) / 2);
    const guess = sortedArray[mid];

    if (guess === item) return mid;
    if (guess < item) {
      lowB = mid + 1;
    } else {
      highB = mid - 1;
    }
  }

  return -1;
}
