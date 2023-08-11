function box(n){
 let arr = [];
 let str = '';
 for(let i = 0; i < n; i++) {
  if(i == 0 || i == n - 1) {
   str = '-'.repeat(n)
  } else {
   str = '-' + ' '.repeat(n - 2) + '-'
  }  
  arr.push(str)
 }
 return arr
}
