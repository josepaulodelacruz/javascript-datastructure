function addUpTo (n) {
    return n * (n + 1) / 2
}

// a for loop implementation

function forLoopAddUp (n) {
    let total = 0
    for(let i = 1 ; i <= n ; i++) {
        total += i
    }
    return total
}

console.log(forLoopAddUp(6))

