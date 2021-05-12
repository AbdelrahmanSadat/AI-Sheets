const { cloneDeep } = require("lodash");

module.exports = function mutate(geneticsArray, mutationPercent) {
    let mutatedGeneticsArray = cloneDeep(geneticsArray)

    for (let i = 0; i < mutatedGeneticsArray.length; i++) {
        //  +2 for the binary string identifier
        for (let j = 2; j < mutatedGeneticsArray[i].binary.length; j++) {
            let mutationChance = Math.random() * 100;
            if (mutationChance < mutationPercent) {
                if (mutatedGeneticsArray[i].binary[j] == "0")
                    mutatedGeneticsArray[i].binary = setCharAt(mutatedGeneticsArray[i].binary, j, "1")
                else if (mutatedGeneticsArray[i].binary[j] == "1")
                    mutatedGeneticsArray[i].binary = setCharAt(mutatedGeneticsArray[i].binary, j, "0")

            }
        }
    }

    return mutatedGeneticsArray
}


function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}