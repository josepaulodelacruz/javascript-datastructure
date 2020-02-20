/**
 * Implement a function called countUniqueValues
 * which accepts a sorted array, and counts the
 * unique values in the array. There can be negative
 * numbers in the array, but it will always be sorted
 */

function countUniqueValues(arr) {
  let num = 0
  for(let i = 0 ; i < arr.length ; i++) {
    let current = arr[i]
    let comparison = arr[i + 1]
    if(current !== comparison) {
      num++
    }
  }

  return num

}

console.log(countUniqueValues([-2,-1,-1,0,1]))
