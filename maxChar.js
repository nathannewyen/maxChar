function charMax(str) {
    const charMap = {}
    let max = 0
    let maxChar = '';
    for (let i of str) {
        if (charMap[i]) {
            charMap[i]++
        } else {
            charMap[i] = 1
        }
    }

    for (let i in charMap) {
        if (charMap[i] > max) {
            max = charMap[i]
            maxChar = i
        }
    }
    return maxChar
}
console.log(charMax("hello there"))