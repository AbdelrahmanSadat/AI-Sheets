let upperLimit = require('./upperLimit')
let lowerLimit = require('./lowerLimit')
let cloneDeep = require('lodash/cloneDeep')

let rastrigin = require('./rastrigin')
let sphere = require('./sphere');
let generateInitial = require('./generateInitial')

let initialX = generateInitial()

function simpleExponentialSARastrigin() {
    console.time("rastrigin")
    let T = 1
    let alpha = 0.8
    let x = initialX
    let fx = rastrigin(initialX)
    let solRastrigin = { x, fx }

    for (let i = 0; i < 1000; i++) {
        // compute fitness
        fx = rastrigin(x)
        let xi = cloneDeep(x);

        // for each q element of x

        // generate a candidate solution for SA
        let index = Math.floor(Math.random() * xi.length)
        xi[index] = lowerLimit(upperLimit((Math.random() * 2 - 1) + xi[index], 5.12), -5.12)

        let fxi = rastrigin(xi)

        if (fxi < fx) {
            x = xi
            fx = fxi
            solRastrigin.x = xi;
            solRastrigin.fx = fx;
        }
        else {
            let r = Math.random()
            if (r < Math.exp(fx - fxi / T)) {
                x = xi
                fx = fxi
                solRastrigin.x = xi;
                solRastrigin.fx = fx;
            }
        }

    }
    console.timeEnd("rastrigin")
    return solRastrigin
}

function simpleExponentialSASphere() {
    console.time("sphere")
    let T = 1
    let alpha = 0.8
    let x = initialX
    let fx = sphere(initialX)
    let solSphere = { x, fx }

    for (let i = 0; i < 1000; i++) {
        // compute fitness
        fx = sphere(x)
        let xi = cloneDeep(x);

        // for each q element of x

        // generate a candidate solution for SA
        let index = Math.floor(Math.random() * xi.length)
        xi[index] = lowerLimit(upperLimit((Math.random() * 2 - 1) + xi[index], 5.12), -5.12)

        let fxi = sphere(xi)

        if (fxi < fx) {
            x = xi
            fx = fxi
            solSphere.x = xi;
            solSphere.fx = fx;
        }
        else {
            let r = Math.random()
            if (r < Math.exp(fx - fxi / T)) {
                x = xi
                fx = fxi
                solSphere.x = xi;
                solSphere.fx = fx;
            }
        }

    }
    console.timeEnd("sphere")
    return solSphere
}


module.exports = {
    simpleExponentialSARastrigin,
    simpleExponentialSASphere
}





