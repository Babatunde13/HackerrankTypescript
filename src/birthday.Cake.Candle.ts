const birthdayCakeCandles = (candles: number[]) : number => {
  let count : number = 0
  let max = Math.max(...candles)
  candles.forEach((ele: number) => ele === max? count ++ : count)
  return count
}
console.log(birthdayCakeCandles([4, 4, 1, 3]))

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem