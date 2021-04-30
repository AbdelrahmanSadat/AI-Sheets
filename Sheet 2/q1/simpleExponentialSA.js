const isEqual = require('lodash/isEqual');

const randomSolution = require('./randomSolution');
const calculateDistance = require('./calculateDistance');
const tspDataSet = require('./tspDataSet');
const { cloneDeep } = require('lodash');
const exponentialCooling = require('./exponentialCooling');

// let arrayMax = require("../misc/arrayMax")


module.exports = function simpleExponentialSA() {
    console.time("simpleExponentialSA")
    let T = 1
    let alpha = 0.8
    let x = randomSolution(tspDataSet)


    let counter = 0
    while (counter < 100) {
        fx = calculateDistance(x, tspDataSet);



        let xq = cloneDeep(x);

        // a random index in this case
        let index = Math.floor(Math.random() * xq.length)
        q = x[index]

        // another random index
        let randomIndex = Math.floor(Math.random() * xq.length)

        // don't swap if it's the first or last city
        if (!(xq[randomIndex] == 0 || q == 0)) {
            let temp = xq[index];
            xq[index] = xq[randomIndex]
            xq[randomIndex] = temp
        }

        let fxq = calculateDistance(xq, tspDataSet)

        if (fxq < fx)
            x = xq

        else {
            let r = Math.random();
            if (r < Math.exp(fx - fxq / T))
                x = xq
        }

        T = exponentialCooling(T, alpha)

        counter++
    }

    console.timeEnd("simpleExponentialSA")

    return ({
        route: x,
        distance: calculateDistance(x, tspDataSet)
    })
}
