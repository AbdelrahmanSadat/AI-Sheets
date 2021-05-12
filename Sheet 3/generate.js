// Generates the inial binary strings

module.exports =
    function generateRandomBinary(binaryLength) {
        let binary = "0b";
        for (let i = 0; i < binaryLength; ++i) {
            binary += randomDigit();
        }
        return binary;
    }



function randomDigit() {
    return Math.floor(Math.random() * Math.floor(2));
}