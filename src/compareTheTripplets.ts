const compareTriplets = (a: number[], b: number[]): number[] | null => {
  // Write your code here
  if (a.length !== b.length) return null
  let alicePoint = 0, bobPoint = 0;
  for (let i = 0; i < a.length; i++) {
    a[i] > b[i] ? alicePoint++ : a[i] === b[i] ? null : bobPoint++
  }
  return [alicePoint, bobPoint]

}
console.log(compareTriplets([17, 28, 30], [99, 16, 8]))
console.log(compareTriplets([5, 6, 7], [3, 6, 10]))