import linearSearch from './linearSearch';

describe('linearSearch', () => {
  it('search number in array', () => {
    const array = [9, 4, 19, 4, 12, 1, 7, 9];

    expect(linearSearch(array, 1)).toEqual([5]);
    expect(linearSearch(array, 4)).toEqual([1, 3]);
    expect(linearSearch(array, 9)).toEqual([0, 7]);
    expect(linearSearch(array, 2)).toEqual([]);
    expect(linearSearch([2], 2)).toEqual([0]);
    expect(linearSearch([], 2)).toEqual([]);
  });

  it('search string in array', () => {
    const array = ['ac', 'bb', 'da', 'cb', 'bb', 'ab', 'ad', 'ac'];

    expect(linearSearch(array, 'aa')).toEqual([]);
    expect(linearSearch(array, 'cb')).toEqual([3]);
    expect(linearSearch(array, 'bb')).toEqual([1, 4]);
    expect(linearSearch(array, 'ac')).toEqual([0, 7]);
    expect(linearSearch(['cc'], 'cc')).toEqual([0]);
    expect(linearSearch([], 'aa')).toEqual([]);
  });
});
