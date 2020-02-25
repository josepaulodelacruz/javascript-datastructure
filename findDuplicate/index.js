/**
 * In a given array, create a function
 * that will find any duplicate values.
 * solution must be o(n) linear time
 */

function duplicate(arr) {
    let value = {}
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        let num = arr[i]
        if(value[num]) {
            result.push(arr[i])
        } else {
            value[i] = 1
        }
    }

    return result 

}

console.log(duplicate([1,3,2,5,1,6,3]))
