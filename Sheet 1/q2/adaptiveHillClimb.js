let upperLimit = require('./upperLimit')
let lowerLimit = require('./lowerLimit')

let rastrigin = require('./rastrigin')
let sphere = require('./sphere');
let generateInitial = require('./generateInitial')

let initialX = generateInitial()

function adaptiveRastrigin() {
    console.time("rastrigin")
    let pm = Math.random();
    let x = initialX
    let fx = rastrigin(initialX)
    let solRastrigin = { x, fx }

    for (let i = 0; i < 1000; i++) {
        // compute fitness
        fx = rastrigin(x)
        let xi = x;

        // for each q element of x
        x.forEach((q, index, x) => {
            let r = Math.random();
            if (r < pm)
                xi[index] = lowerLimit(upperLimit((Math.random() * 2 - 1) + xi[index], 5.12), -5.12)



        })

        let fxi = rastrigin(xi)

        if (fxi > fx) {
            x = xi
            fx = fxi
            solRastrigin.x = xi;
            solRastrigin.fx = fx;
        }

    }
    console.timeEnd("rastrigin")
    return solRastrigin
}

function adaptiveSphere() {
    console.time("sphere")
    let pm = Math.random();
    let x = initialX
    let fx = sphere(initialX)
    let solSphere = { x, fx }

    for (let i = 0; i < 1000; i++) {
        // compute fitness
        fx = sphere(x)
        let xi = x;

        // for each q element of x
        x.forEach((q, index, x) => {
            let r = Math.random();
            if (r < pm)
                xi[index] = lowerLimit(upperLimit((Math.random() * 2 - 1) + xi[index], 5.12), -5.12)



        })

        let fxi = sphere(xi)

        if (fxi > fx) {
            x = xi
            fx = fxi
            solSphere.x = xi;
            solSphere.fx = fx;
        }

    }

    console.timeEnd("sphere")
    return solSphere
}


module.exports = {
    adaptiveRastrigin,
    adaptiveSphere
}





