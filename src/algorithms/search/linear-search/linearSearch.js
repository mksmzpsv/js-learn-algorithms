/**
 * Linear search implementation.
 * @param {*[]} array
 * @param {*} item
 * @return {number[]} array with index/indexes of item/items found or empty array
 */

export default function linearSearch(array, item) {
  const found = [];
  array.forEach((el, index) => {
    if (el === item) {
      found.push(index);
    }
  });

  return found;
}
