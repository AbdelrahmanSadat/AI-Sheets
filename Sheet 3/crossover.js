module.exports = function Crossover(parents) {
    // -2 because of the 0b in the string
    let n = parents[0].binary.length - 2;
    let r = Math.floor(Math.random * n)

    let children = ["0b", "0b"]

    for (let i = 0; i < n; i++) {
        let firstParentBit = parents[0].binary[i + 2]
        let secondParentBit = parents[1].binary[i + 2]
        if (i < r) {
            // TODO?: the 0b binary shit might be bullshit
            // TODO?: if it fails, treat it like a normal string?
            // TODO? and maybe remove the 0b entirely
            // +2 to skip the 0b in the string.
            children[0] += firstParentBit
            children[1] += secondParentBit
        }
        else {
            children[0] += secondParentBit
            children[1] += firstParentBit
        }
    }

    return children
}