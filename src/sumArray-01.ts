{
  //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  const sumArray = (arr: number[]): number => {
    let totalSum = 0;
    for (const num of arr) {
      totalSum += num;
    }
    console.log(totalSum);
    return totalSum;
  };
  sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
}
