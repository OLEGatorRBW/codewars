function smartSum(...args){
    let arrResult = [];
    
    args.forEach(elem => {
       if(Array.isArray(elem)){
        arrResult.push(smartSum(...elem));
       } else {
        arrResult.push(elem);        
       }       
    })
    return arrResult
}
console.log(smartSum(1,2,[[3,4],5],6))