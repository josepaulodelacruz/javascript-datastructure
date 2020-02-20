/**
 * Write function called maxSubarraySum which accepts
 * an array of integers and a number called n. The
 * function should calculate the maximum sum of n consecutive
 * element in the array
 */

function maxSubarraySum(arr, option) {
  let maxSum = 0
  let tempSum = 0
  if(arr.length < option) return null

  for(let i = 0 ; i < option ; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for(let i = option ; i < arr.length ; i++) {
    tempSum = tempSum - arr[i - option] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum

}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 3))
