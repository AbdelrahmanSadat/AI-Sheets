const isEqual = require('lodash/isEqual');

const randomSolution = require('./randomSolution');
const calculateDistance = require('./calculateDistance');
const tspDataSet = require('./tspDataSet');

// let arrayMax = require("../misc/arrayMax")


module.exports = function steepestHillTSP() {
    console.time("nextAscentHillClimb")
    let x = randomSolution(tspDataSet)


    // TODO: set condition
    let counter = 0
    while (counter < 100) {
        fx = calculateDistance(x, tspDataSet);
        let replaceFlag = false

        let fxq;
        // to save all xq's (arrays)

        // for each q element of x
        x.forEach((q, index, x) => {
            let xq = x;

            // either +/- something, or a completely new value, idk
            let randomIndex = Math.floor(Math.random() * xq.length)
            let temp = xq[index];
            xq[index] = xq[randomIndex]
            xq[randomIndex] = temp


            fxq = calculateDistance(xq, tspDataSet)
            // console.log(fxq)

            if (fxq < fx) {
                x = xq
                replaceFlag = true
            }

        })

        if (!replaceFlag)
            x = randomSolution(tspDataSet)

        counter++
    }

    console.timeEnd("nextAscentHillClimb")

    return ({
        route: x,
        distance: calculateDistance(x, tspDataSet)
    })
}
