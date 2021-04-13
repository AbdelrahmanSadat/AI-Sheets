module.exports = function sphere(features){
    let ans = 0;

    features.forEach((feature)=>{
        ans += feature ^2
    })

    return ans;
}