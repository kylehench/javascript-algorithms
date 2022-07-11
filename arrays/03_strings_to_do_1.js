function removeBlanks(string) {
  let newString = ''
  for (ch of string) {
    if (ch!==' ') newString += ch
  }
  return newString
}

// test removeBlanks
console.log(removeBlanks(' Pl ayTha tF u nkyM usi c '))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

function getDigits(string) {
  let newString = ''
  for (ch of string) {
    if (!isNaN(ch)) newString += ch
  }
  return Number(newString)
}

// test getDigits
console.log(getDigits("abc8c0d1ngd0j0!8"))
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

function acronym(string) {
  const words = string.split(' ')
  let acronym = ''
  for (word of words) {
    if (word.length>0) acronym += word[0]
  }
  return acronym.toUpperCase()
}

// test acronyms
console.log(acronym(" there's no free lunch - gotta pay yer way. "))
console.log(acronym("Live from New York, it's Saturday Night!"))

function countNonSpaces(string) {
  let count = 0
  for (ch of string) {
    if (ch!==' ') count++
  }
  return count
}

// test countNonSpaces
console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))

function removeShorterStrings(arr, num) {
  const newArr = []
  for (string of arr) {
    if (string.length>=num) newArr.push(string)
  }
  return newArr
}

// test removeShorterStrings
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))