function dbSort(a){
    let arrStr = [];
    let arrNum = [];
    for(let key of a){
        typeof(key) == 'number' ? arrNum.push(key) : arrStr.push(key)
    }
    return arrNum.sort((a, b) => (a - b)).concat(arrStr.sort())
}

