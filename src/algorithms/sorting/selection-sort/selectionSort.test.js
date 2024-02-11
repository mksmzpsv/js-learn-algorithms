import selectionSort from './selectionSort';

describe('selectionSort', () => {
  it('sorting numbers array with selection sort', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const notSortedArray = [8, 10, 5, 2, 11, 6, 14, 13, 15, 9, 7, 3, 1, 12, 4];
    const reverseSortedArray = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const negativeArray = [-6, -3, 0, -7, 3, 6, -1, 7, 8, -10, 10, 1, 11, 2];
    const negativeSortedArray = [-10, -7, -6, -3, -1, 0, 1, 2, 3, 6, 7, 8, 10, 11];

    expect(selectionSort([])).toStrictEqual([]);
    expect(selectionSort([1])).toEqual([1]);
    expect(selectionSort([1, 2])).toEqual([1, 2]);
    expect(selectionSort([2, 1])).toEqual([1, 2]);
    expect(selectionSort([-1, 2, 1, 0, -1, 0, 1, 2])).toEqual([-1, -1, 0, 0, 1, 1, 2, 2]);
    expect(selectionSort([4, 4, 4, 4, 4])).toEqual([4, 4, 4, 4, 4]);
    expect(selectionSort(reverseSortedArray)).toStrictEqual(sortedArray);
    expect(selectionSort(negativeArray)).toStrictEqual(negativeSortedArray);
    expect(selectionSort(notSortedArray)).toStrictEqual(sortedArray);
  });
});
