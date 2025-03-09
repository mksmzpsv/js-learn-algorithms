import { describe, expect, test } from 'vitest';
import binarySearch from './binarySearch';

describe('binarySearch', () => {
  test('search number in sorted array', () => {
    const arrayOddLen = [0, 1, 2, 5, 8, 10, 11, 15, 16];
    const arrayEvenLen = [2, 3, 4, 5, 8, 10, 11, 15];

    expect(binarySearch(arrayOddLen, 0)).toEqual(0);
    expect(binarySearch(arrayEvenLen, 2)).toEqual(0);
    expect(binarySearch(arrayOddLen, 16)).toEqual(8);
    expect(binarySearch(arrayEvenLen, 15)).toEqual(7);
    expect(binarySearch(arrayOddLen, 8)).toEqual(4);
    expect(binarySearch(arrayEvenLen, 5)).toEqual(3);
    expect(binarySearch(arrayOddLen, 21)).toEqual(-1);
    expect(binarySearch(arrayEvenLen, -10)).toEqual(-1);
    expect(binarySearch([], 2)).toEqual(-1);
    expect(binarySearch([2], 2)).toEqual(0);
  });
});
