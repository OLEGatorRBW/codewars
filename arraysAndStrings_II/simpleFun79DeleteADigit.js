function deleteDigit(n) { 
 let str = n.toString(), arr = [], newStr = '';
 for(let i = 0; i < str.length; i++){
  arr.push(+str.replace(str[i], ''))
 }
 return Math.max(...arr)
}
