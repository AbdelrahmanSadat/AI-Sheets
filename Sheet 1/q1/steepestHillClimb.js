const isEqual = require('lodash/isEqual');

const randomSolution = require('./randomSolution');
const calculateDistance = require('./calculateDistance');
const tspDataSet = require('./tspDataSet');
const { cloneDeep } = require('lodash');

// let arrayMax = require("../misc/arrayMax")


module.exports = function steepestHillTSP() {
    let x = randomSolution(tspDataSet)


    // TODO: set condition
    let counter = 0
    while (counter < 100) {
        fx = calculateDistance(x, tspDataSet);

        let fxqs = [];
        // to save all xq's (arrays)
        let xqs = [];

        // for each q element of x
        x.forEach((q, index) => {
            let xq = cloneDeep(x);

            // either +/- something, or a completely new value, idk
            let randomIndex = Math.floor(Math.random() * xq.length)
            let temp = xq[index];
            xq[index] = xq[randomIndex]
            xq[randomIndex] = temp


            // to save all xq's (arrays)
            xqs[index] = xq

            fxqs[index] = calculateDistance(xq, tspDataSet)
        })

        // add the original fx (fx0) to array to include in comparison of best fitness
        fxqs.push(fx); xqs.push(x);
        let fxqsMinIndex = fxqs.indexOf(Math.min(...fxqs));
        let xi = xqs[fxqsMinIndex]

        if (isEqual(x, xi)) {
            x = randomSolution(tspDataSet);
        }
        else
            x = xi

        counter++
    }

    return ({
        route: x,
        distance: calculateDistance(x, tspDataSet)
    })
}
