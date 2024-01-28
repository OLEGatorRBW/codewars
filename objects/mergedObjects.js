function objConcat(){
    let o = [a, b, c];
    let obj = {};

    let arr =  o.map((e) => {
        for(let key in e){
            obj[key] = e[key]
        }
    })
    return obj
    
}
