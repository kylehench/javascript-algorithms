function reverse(arr) {
  for (let i=0; i<=arr.length/2-1; i++) {
    const tmp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = tmp
  }
  return arr
}

// test reverse
console.log(reverse([4,5,6,7]))
console.log(reverse([4,5,6,7,8]))

function rotate(arr, shiftBy) {
  if (shiftBy>0) {
    for (let i=0; i<shiftBy; i++) {
      const tmp = arr[arr.length-1]
      for (let j=arr.length-1; j>0; j--) {
        arr[j] = arr[j-1]
      }
      arr[0] = tmp
    }
  } else {
    for (let i=0; i<-shiftBy; i++) {
      const tmp = arr[0]
      for (let j=0; j<arr.length-1; j++) {
        arr[j] = arr[j+1]
      }
      arr[arr.length-1] = tmp
    }
  }
  return arr
}

// test rotate
console.log(rotate([1,2,3,4,5,6,7,8], 2))
console.log(rotate([1,2,3,4,5,6,7,8], -2))

function filterRange(arr, min, max) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min || arr[i] > max) {
      for (let j=i; j<arr.length-1; j++) {
        arr[j] = arr[j+1]
      }
      arr.length--
      i--
    }
  }
  return arr
}

// test filterRange
console.log(filterRange([1,2,3,4,5,6,7,8], 2, 6))

function concat(arr1, arr2) {
  return [...arr1, ...arr2]
}

// test concat
console.log(concat([4,5,6,7], [1,2,3,4,5,6,7,8]))