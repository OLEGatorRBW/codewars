function rowWeights(array){
 if(array.length < 2){return [array[0], 0]}
 let evenArr = array.filter((e, i) => i % 2 == 0).reduce((a, b) => (a + b));
 let oddArr = array.filter((e, i) => i % 2 != 0 ).reduce((a, b) => (a + b));
 return [evenArr, oddArr]
}
