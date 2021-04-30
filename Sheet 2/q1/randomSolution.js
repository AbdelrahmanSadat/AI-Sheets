module.exports = function randomSolution(tspDataSet) {
    // start at the first city
    let solutionArray = [0];
    // indeces
    let unvisited = tspDataSet.map((cityDistances, index, array) => index)
    //remove first city? (because it will be added at the end anyway?)o
    unvisited.splice(0, 1)

    // for length of unvisited city
    for (let i = 0; i < tspDataSet.length; i++) {
        // check last visited. use it to check possible routes for next city
        let lastVisitedIndex = solutionArray[solutionArray.length - 1];

        // indeces of possible cities to go to
        let possibleCities = []
        let lastVisitedDistances = tspDataSet[lastVisitedIndex]
        for (let i = 0; i < lastVisitedDistances.length; i++) {
            // if this is the last city
            if (unvisited.length == 0) {
                // if it connects to the starting point
                if (lastVisitedDistances[0]) {
                    // add starting point to possibleCities
                    possibleCities.push(0)
                    // can break here. Further iterations are unnecessary
                    break;
                }
            }
            // if city is connected, and is not visited yet, add to possible cities
            if (lastVisitedDistances[i] && unvisited.includes(i))
                possibleCities.push(i)
        }

        // console.log(possibleCities)

        // if a deadend is reached, reset
        if (possibleCities.length == 0) {
            // console.log("Hit a dead end")
            i = -1;
            // start at the first city
            solutionArray = [0];
            // indeces
            unvisited = tspDataSet.map((cityDistances, index, array) => index)
            //remove first city? (because it will be added at the end anyway?)o
            unvisited.splice(0, 1)
            continue
        }

        // pick a random from possible cities
        let randomCityIndex = possibleCities[Math.floor(Math.random() * possibleCities.length)];
        // add it to solution array
        solutionArray.push(randomCityIndex)
        // remove from unvisited
        let indexToRemove = unvisited.indexOf(randomCityIndex)
        unvisited.splice(indexToRemove, 1)

    }





    return solutionArray;
}