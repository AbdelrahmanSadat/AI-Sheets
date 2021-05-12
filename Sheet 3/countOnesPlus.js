// A function that counts the number of ones in a binary string

module.exports = function countOnesPlus(binaryString) {
    let ones = 50
    // TODO?: care the presence of the binary identifier "0b" in the string
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] == 1)
            ones++
    }

    return ones
}