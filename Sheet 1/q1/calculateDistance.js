module.exports = function calculateDistance(solutionArray, tspDataSet) {
    let totalDistance = 0
    for (let i = 0; i < solutionArray.length - 1; i++) {
        currentCity = solutionArray[i]
        nextCity = solutionArray[i + 1]
        routeDistance = tspDataSet[currentCity][nextCity];

        // todo: maybe return false or error or undefined?
        if (!routeDistance)
            return Infinity;
        totalDistance += routeDistance;
    }
    return totalDistance
}