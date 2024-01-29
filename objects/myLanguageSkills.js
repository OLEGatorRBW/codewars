function myLanguages(results) {
    let arr = Object.entries(results);
    let sortArr = arr.filter((e) => {
        return e[1] >= 60
    }).sort((a, b) => (b[1] - a[1]))
    let resArr = [];
    for(let i = 0; i < sortArr.length; i++){
        resArr[i] = sortArr[i][0]
    }
    return resArr
}
