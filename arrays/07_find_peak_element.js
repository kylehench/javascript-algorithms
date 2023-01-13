// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.

var findPeakElement = function(nums) {
  nums.splice(0,0,-Infinity)
  nums.push(-Infinity)
  for (let i=1; i<nums.length-1; i++) {
    if (nums[i-1]< nums[i] && nums[i] > nums[i+1]) return i-1
  }
};