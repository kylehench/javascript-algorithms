function pushFront(arr, val) {
  return [val, ...arr]
}

function popFront(arr) {
  let result = arr[0]
  for (let i=0; i<arr.length-1; i++) {
    arr[i] = arr[i+1]
  }
  arr.pop(arr.length-1)
  console.log(arr)
  return result
}

function insertAt(arr, idx, val) {
  arr.push(0)
  for (let i=idx+1; i<arr.length; i++) {
    arr[i] = arr[i-1]
  }
  arr[idx] = val
  return arr
}

// push front
console.log(pushFront([1,2,3], 5))

// pop front
console.log(popFront([1,2,3]))

// insert at
console.log(insertAt([100,200,5], 2, 311))