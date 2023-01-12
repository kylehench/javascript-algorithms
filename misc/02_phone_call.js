// Some phone usage rate may be described as follows:

// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

function solution(min1, min2_10, min11, s) {
  let duration = 0
  let balance = s
  if (balance >= min1) {
    duration += 1
    balance -= min1
  }
  if (duration===1 && balance >= min2_10) {
    let segment = Math.min(Math.trunc(balance/min2_10), 9)
    duration += segment
    balance -= segment*min2_10
  }
  if (duration===10 && balance >= min11) {
    let segment = Math.trunc(balance/min11)
    duration += segment
    balance -= segment*min11
  }
  return duration
}