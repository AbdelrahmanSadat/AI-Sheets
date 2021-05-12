const generateRandomBinary = require("./generate")
const countOnes = require("./countOnes")
const rouletteWheel = require("./rouletteWheel")
const crossover = require("./crossover")
const mutate = require("./mutate")

const cloneDeep = require('lodash/cloneDeep')

// Parameters: 
// n: length of string, generationLimit: number of iterations?
// populationSize: number of living genes?, 

module.exports = function oneMax(n, populationSize, mutationPercent, generationLimit) {

    let generationHistory = []
    let geneticsArray = []

    // initial generation
    for (let i = 0; i < populationSize; i++) {
        let binary = generateRandomBinary(n)
        geneticsArray.push({
            binary,
            fitness: countOnes(binary)
        })
    }

    generationHistory.push(geneticsArray)

    // console.log(geneticsArray)

    for (let f = 0; f < generationLimit; f++) {

        let children = []
        while (children.length < geneticsArray.length) {

            // Selection
            let parents = [];
            parents[0] = rouletteWheel(geneticsArray)
            parents[1] = rouletteWheel(geneticsArray)
            while (parents[0].geneIndex == parents[1].geneIndex)
                parents[1] = rouletteWheel(geneticsArray)

            // Crossover
            let newChildren = crossover([parents[0].gene, parents[1].gene])
            newChildren = newChildren.map((childBinary) => {
                return { binary: childBinary, fitness: countOnes(childBinary) }
            })
            children.push(...newChildren)
        }

        // ! ref copy
        geneticsArray = mutate(children, mutationPercent)
        generationHistory.push(geneticsArray)
    }

    return generationHistory

}