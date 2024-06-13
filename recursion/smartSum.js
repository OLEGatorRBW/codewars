function smartSum(...args){
    let sum = 0;

    args.forEach((elem) => {
        return Array.isArray(elem) ? sum += smartSum(...elem) : sum += elem
    })
    return sum
}