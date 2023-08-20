function formatWords(words){
 if (!words || words.length === 0) return '';

 let arr = words.filter(e => e);

 if(arr.length === 1) return arr.join('');
 
 arr[arr.length - 1] = 'and ' + arr[arr.length - 1];

 if(arr.length == 2) {
  return arr.join(' ')
 } else  {
  for(let i = 0; i < arr.length - 2; i++) {
   arr[i] = arr[i] + ','
  }
 }
 return arr.join(' ')
}
