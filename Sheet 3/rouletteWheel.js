module.exports = function rouletteWheel(genes) {

    let fitnessSum = 0
    for (let i = 0; i < genes.length; i++)
        fitnessSum += genes[i].fitness

    // Roulette Wheel
    // random number
    let r = Math.floor(Math.random() * fitnessSum)
    let f = genes[0].fitness
    let k = 0
    while (f < r) {
        k++
        f += genes[k].fitness
    }
    let parent = genes[k]

    return { gene: parent, geneIndex: k }
}