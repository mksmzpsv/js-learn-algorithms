/**
 * Selection sorting implementation.
 * @param {number[]} array
 * @return {number[]} sorted array
 */

export default function selectionSort(array) {
  const sortedArray = [...array];

  for (let i = 0; i < sortedArray.length; i += 1) {
    let minIdx = i;

    for (let k = minIdx + 1; k < sortedArray.length; k += 1) {
      if (sortedArray[minIdx] > sortedArray[k]) {
        minIdx = k;
      }
    }
    if (minIdx !== i) {
      [sortedArray[minIdx], sortedArray[i]] = [sortedArray[i], sortedArray[minIdx]];
    }
  }

  return sortedArray;
}
