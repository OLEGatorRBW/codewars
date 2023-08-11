function checkExam(array1, array2) {
 let res =  array1.reduce((acc, prev, i) => { 
  if (array2[i] == '') return acc += 0;
  return prev == array2[i] ? acc += 4 : acc -= 1
 }, 0)
 if(res < 0) return 0;
 return res
}
