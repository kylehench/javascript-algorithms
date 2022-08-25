// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function min_to_front(nums) {
  minimum = nums[0]
  minimum_idx = 0
  nums.forEach((num, idx) => {
    if (num < minimum) {
      minimum = num
      minimum_idx = idx
    }
  })
  for (let i = minimum_idx; i > 0; i--) {
    nums[i] = nums[i-1]
  }
  nums[0] = minimum
  return nums
}

console.log(min_to_front([4,2,1,3,5]))
console.log(min_to_front([4,2,5,3,1]))
console.log(min_to_front([-1,2,5,3,1]))