function findMagic(arr){
 return arr.reduce((acc, prev, i) => {return prev == i ? prev : acc}, -1)
}
