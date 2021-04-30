function simpleHillClimb() {
    let x = randomly generated indivisual???
     
    while(!condition){
        // compute fitness
        fx = ...
        let replaceFlag = false;

        // for each q element of x
        x.forEach((q, index, x)=>{
            let xq = q;
            xq[index] = random mutation on it

            let fxq = compute fitness(xq)

            if(fxq > fx){
                x = xq;
                replaceFlag = true
            }
        })
        if(!replaceFlag)
            x = randomly generated indivisual??
    }
}