{
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  const removeDuplicates = (arr: number[]): number[] => {
    //  as we already know Set method only keep the unique values
    let UniqueArr = new Set<number>();
    for (const num of arr) {
      UniqueArr.add(num);
    }
    return Array.from(UniqueArr);
  };

  const result1 = removeDuplicates([
    9, 8, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6,
    6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9,
  ]);

  const result2 = removeDuplicates([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]);
  console.log({ result1 }, { result2 });
}
