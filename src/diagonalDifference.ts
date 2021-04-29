const diagonalDifference = (arr: number[][]) : number => {
  let leadDiag = 0,
    trailDiag = 0,
    l = arr[0].length - 1
  for (let i = 0; i<= l; i++) {
    leadDiag += arr[i][i]
    trailDiag += arr[i][l-i]
  }
  return Math.abs(leadDiag-trailDiag)
}

console.log(diagonalDifference(
  [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ]
))