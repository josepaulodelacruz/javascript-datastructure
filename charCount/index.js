// create a function that return a object letter accumulator
// loop through all the character in the word
//create an accumulator
//check if its a repeated character

function charCount (str) {
    let result = {}
    for(let i = 0 ; i < str.length ; i++) {
        let char = str[i]
        if(result[char] > 0) {
            result[char]++
        } else {
            result[char] = 1
        }
     }
    return result
}

console.log(charCount('aabbdefghiii'))
