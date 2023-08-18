function getLengthOfMissingArray(arrayOfArrays) {
 if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return 0; 
 }
 if (arrayOfArrays.some(arr => !arr || arr.length === 0)) {
    return 0;
 }
 
 let newArr = arrayOfArrays.map(e => e.length).filter(e => e != 0).sort((a, b) => a - b);

 let l = 0;
 for(let i = 1; i < newArr.length; i++) {
  if (newArr[i] - newArr[i-1] > 1) {
   l = newArr[i - 1] + 1
  }
  }
 return l;
}
