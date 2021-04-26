const timeConversion = (s: string): string => {
  const hour = parseInt(s.substring(0, 2))
  const isPm = s.substring(s.length - 2, s.length) === 'PM';
  const pm = hour+12
   isPm && (hour !== 12)  ? s = s.replace(/^.{2}/g, pm.toString()) :
    (hour === 12 && !isPm ? s = s.replace(/^.{2}/g, '00') : '')
  return s.substring(0, s.length - 2)
}

console.log(timeConversion('12:05:45AM'))

// https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen