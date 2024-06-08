function getObjectDepth(obj) {
    if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
        return 0;
    }
    let maxLength = 0;
    for(let key in obj){
        console.log(obj[key]);
        maxLength = Math.max(getObjectDepth(obj[key]) + 1, maxLength)
    }
    return maxLength
}
console.log(getObjectDepth({a: "b", c: {d: 4}}))
