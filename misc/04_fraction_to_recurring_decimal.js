// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
// If the fractional part is repeating, enclose the repeating part in parentheses.
// If multiple answers are possible, return any of them.
// It is guaranteed that the length of the answer string is less than 10^4 for all the given inputs.

var fractionToDecimal = function(numerator, denominator) {
  let res = [(numerator/denominator < 0) ? '-' : '']
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)
  res.push(String(Math.trunc(numerator/denominator)))
  let remainder = numerator % denominator
  if (remainder===0) return res.join('')
  res.push('.')
  // save remainders: index so that if we see the same remainder again, we have found our repeating range of digits
  const remainder_history = {remainder: res.length-1}
  while (remainder!==0 && res.length<1e4) {
    // moves frame with each digit added to res
    remainder *= 10
    res.push(String(Math.trunc(remainder/denominator)))
    remainder = remainder % denominator
    if (remainder in remainder_history) {
      res.splice(remainder_history[remainder]+1, 0, '(')
      res.push(')')
      break
    }
    remainder_history[remainder] = res.length-1
  }
  res = res.join('')
  return res
};