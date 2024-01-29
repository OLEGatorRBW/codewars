function findUnique(numbers) {
    let obj = {};

    for(let i = 0; i < numbers.length; i++){
        obj[numbers[i]] === undefined ? obj[numbers[i]] = 1 : obj[numbers[i]]++;
    }
    for(let key in obj){
        if(obj[key] == 1){
            return parseInt(key)
        }
    }
}


console.log(findUnique([1, 8, 4, 4, 6, 1, 8]))