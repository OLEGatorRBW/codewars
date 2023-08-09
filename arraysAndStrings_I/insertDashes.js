function insertDash(num) {
 let arr = String(num).split('');
 let str = arr[0];

 for(let i = 0; i < arr.length - 1; i++) {
  if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0){
   str += "-";
  }
  str += arr[i + 1];
 }
 return str
}

// function insertDash(num) {
//  let str = String(num);
//  let arr = str.split('');
//  let res = []
//  for(let i = 0; i < arr.length - 1; i++){
//   res.push(arr[i])
//   if(arr[i] % 2 != 0 && arr[i + 1] % 2 != 0) {
//    res.push('-')
//   }
//  }
//  res.push(arr[arr.length - 1])
//  return res
// }
