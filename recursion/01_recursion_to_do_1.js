// recursive sigma
function rSigma(number) {
  number = Math.trunc(number)
  function recursiveSigma(number, total) {
    if (number<=0) return total
    return recursiveSigma(number-1, total+number)
  }
  return recursiveSigma(number, 0)
}
console.log(rSigma(5))
console.log(rSigma(2.5))
console.log(rSigma(-1))

// recursive factorial
function rFactorial(number) {
  number = Math.trunc(number)
  function recursiveFactorial(number, total) {
    if (number<=0) return total
    return recursiveFactorial(number-1, total*number)
  }
  return recursiveFactorial(number, 1)
}
console.log('\nrecursive factorial:')
console.log(rFactorial(-1))
console.log(rFactorial(0))
console.log(rFactorial(3))
console.log(rFactorial(6.5))

// function flood fill
let canvas2D = [
  [3,2,3,4,3],
  [2,3,3,4,0],
  [7,3,3,5,3],
  [6,5,3,4,1],
  [1,2,3,3,3],
]
function floodFill(canvas, startXY, newColor) {
  [startX, startY] = startXY
  const oldColor = canvas[startY][startX]
  canvas[startY][startX] = newColor
  // check pixel above
  if (startY>0 && canvas[startY-1][startX]===oldColor) floodFill(canvas, [startX, startY-1], newColor)
  return canvas
}

console.log(JSON.stringify(canvas2D))
console.log(JSON.stringify(floodFill(canvas2D, [2,2], 1)))