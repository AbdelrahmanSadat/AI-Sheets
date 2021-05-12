const { plot } = require('nodeplotlib');
const oneMax = require("./oneMax");
const oneMaxPlus = require('./oneMaxPlus');


let oneMaxResultA = oneMax(30, 20, 1, 100)
let dataA = oneMaxResultA.map((generationData, index) => {
    return {
        index, generationData
    }
})
let maxDataA = oneMaxResultA.map((generationData, index) => {
    let max = generationData.reduce((accumulator, currentValue) => {
        if (!accumulator || currentValue.fitness > accumulator.fitness)
            return currentValue
        return accumulator
    })
    return max.fitness
})
let averageDataA = oneMaxResultA.map((generationData, index) => {
    let avg = generationData.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.fitness
    }, 0) / generationData.length
    return avg
})

let plotData = [{ x: undefined, y: maxDataA, type: 'scatter' }, { x: undefined, y: averageDataA, type: 'scatter' }]
plot(plotData)




let monteCarlo1 = []
for (let i = 0; i < 50; i++) {
    monteCarlo1.push(oneMax(30, 20, 1, 100))
}

let monteCarlo1Maxes = monteCarlo1.map((oneMaxResult) => {
    return oneMaxResult.map((generationData, index) => {
        let max = generationData.reduce((accumulator, currentValue) => {
            if (!accumulator || currentValue.fitness > accumulator.fitness)
                return currentValue
            return accumulator
        })
        return max.fitness
    })
})
let monteCarlo1MaxAverage = monteCarlo1Maxes.map((max, index) => {
    let avg = max.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0) / max.length
    return avg
})
let monteCarlo1MaxLastValue = monteCarlo1Maxes.map(
    (generationMaxes) => generationMaxes[generationMaxes.length - 1]
)
plot([{ x: undefined, y: monteCarlo1MaxAverage }, { x: undefined, y: monteCarlo1MaxLastValue }])

let monteCarlo2 = []
for (let i = 0; i < 50; i++) {
    monteCarlo2.push(oneMax(30, 40, 1, 100))
}

let monteCarlo2Maxes = monteCarlo2.map((oneMaxResult) => {
    return oneMaxResult.map((generationData, index) => {
        let max = generationData.reduce((accumulator, currentValue) => {
            if (!accumulator || currentValue.fitness > accumulator.fitness)
                return currentValue
            return accumulator
        })
        return max.fitness
    })
})
let monteCarlo2MaxAverage = monteCarlo2Maxes.map((max, index) => {
    let avg = max.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0) / max.length
    return avg
})
let monteCarlo2MaxLastValue = monteCarlo2Maxes.map(
    (generationMaxes) => generationMaxes[generationMaxes.length - 1]
)
plot([{ x: undefined, y: monteCarlo2MaxAverage }, { x: undefined, y: monteCarlo2MaxLastValue }])

let monteCarlo3 = []
for (let i = 0; i < 50; i++) {
    monteCarlo3.push(oneMax(30, 20, 5, 100))
}

let monteCarlo3Maxes = monteCarlo3.map((oneMaxResult) => {
    return oneMaxResult.map((generationData, index) => {
        let max = generationData.reduce((accumulator, currentValue) => {
            if (!accumulator || currentValue.fitness > accumulator.fitness)
                return currentValue
            return accumulator
        })
        return max.fitness
    })
})
let monteCarlo3MaxAverage = monteCarlo3Maxes.map((max, index) => {
    let avg = max.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0) / max.length
    return avg
})
let monteCarlo3MaxLastValue = monteCarlo3Maxes.map(
    (generationMaxes) => generationMaxes[generationMaxes.length - 1]
)
plot([{ x: undefined, y: monteCarlo3MaxAverage }, { x: undefined, y: monteCarlo3MaxLastValue }])

let monteCarlo4 = []
for (let i = 0; i < 50; i++) {
    monteCarlo4.push(oneMax(30, 20, 0, 100))
}

let monteCarlo4Maxes = monteCarlo4.map((oneMaxResult) => {
    return oneMaxResult.map((generationData, index) => {
        let max = generationData.reduce((accumulator, currentValue) => {
            if (!accumulator || currentValue.fitness > accumulator.fitness)
                return currentValue
            return accumulator
        })
        return max.fitness
    })
})
let monteCarlo4MaxAverage = monteCarlo4Maxes.map((max, index) => {
    let avg = max.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0) / max.length
    return avg
})
let monteCarlo4MaxLastValue = monteCarlo4Maxes.map(
    (generationMaxes) => generationMaxes[generationMaxes.length - 1]
)

plot([{ x: undefined, y: monteCarlo4MaxAverage }, { x: undefined, y: monteCarlo4MaxLastValue }])



let monteCarlo5 = []
for (let i = 0; i < 50; i++) {
    monteCarlo5.push(oneMaxPlus(30, 20, 1, 100))
}

let monteCarlo5Maxes = monteCarlo5.map((oneMaxResult) => {
    return oneMaxResult.map((generationData, index) => {
        let max = generationData.reduce((accumulator, currentValue) => {
            if (!accumulator || currentValue.fitness > accumulator.fitness)
                return currentValue
            return accumulator
        })
        return max.fitness
    })
})
let monteCarlo5MaxAverage = monteCarlo5Maxes.map((max, index) => {
    let avg = max.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0) / max.length
    return avg
})
let monteCarlo5MaxLastValue = monteCarlo5Maxes.map(
    (generationMaxes) => generationMaxes[generationMaxes.length - 1]
)

plot([{ x: undefined, y: monteCarlo5MaxAverage }, { x: undefined, y: monteCarlo5MaxLastValue }])

