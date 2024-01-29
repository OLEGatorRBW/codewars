function removeDuplicateWords (s) {
    let arr = [];
    let sArr = s.split(' ');
    for(let i = 0; i < sArr.length; i++){
        if(!arr.includes(sArr[i])){
            arr.push(sArr[i])
        }
    }
    return arr.join(' ')
}
