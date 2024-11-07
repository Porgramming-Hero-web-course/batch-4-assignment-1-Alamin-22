{
  //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  const sumArray = (arr: number[]): number => {
    let totalSum: number = 0;
    for (const num of arr) {
      totalSum += num;
    }
    return totalSum;
  };
  const res1 = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  console.log({ res1 });
}
