module.exports = function lowerLimit(number, limit) {
    if (number < limit)
        return limit
    return number
}