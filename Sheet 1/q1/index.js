let tsp = require('./tspDataSet')
let randomSolution = require('./randomSolution');
let calculateDistance = require('./calculateDistance');
let steepestHillTSP = require('./steepestHillClimb');
const nextAscentHillClimb = require('./nextAscentHillClimb');

// let result = randomSolution(tsp);
// console.log(tsp)
// console.log(result)
// console.log(calculateDistance(result, tsp))

console.log(steepestHillTSP())
console.log(nextAscentHillClimb())
