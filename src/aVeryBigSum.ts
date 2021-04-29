const aVeryBigSum = (arr: number[]): number => arr.reduce((num, idx) => num + idx)

console.log(aVeryBigSum([
  1000000001, 1000000002, 
  1000000003, 1000000004, 1000000005
]))