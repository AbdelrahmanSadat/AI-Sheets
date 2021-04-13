module.exports = function rastrigin(features){
    let ans = 10*features.length;

    features.forEach((feature, index, array)=>{
        ans+= feature^2 - 10 * Math.cos(2*Math.PI*feature)
    })

    return ans
}