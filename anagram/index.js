/**
 * Given two strings, write a function to determine if the
 * second string is an anagram of the first. An anagram is a word,
 * phrase, or name formed by rearranging the
 * letters of another, such as cinema, formed from iceman
 */

function validAnagram(string1, string2) {
    if(string1.length !== string2.length) {
        return false
    }

    let charCount = {}

    for(let i = 0 ; i < string1.length ; i++) {
        let letter = string1[i]
        charCount[letter] ? charCount[letter] += 1 : charCount[letter] = 1
    }

    for(let i = 0 ; i < string2.length ; i++) {
        let letter = string2[i]
        if(!charCount[letter]){
            return false
        }else {
            charCount[letter] -= 1
        }
    }

    return true

}

console.log(validAnagram('anagram', 'nagaram'))
