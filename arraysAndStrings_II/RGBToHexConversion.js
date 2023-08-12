function rgb(r, g, b){
 let str = '';
 return [r, g, b].reduce((acc, prev) => {  
  if(prev < 0) return acc += '00';
  if(prev > 255) return acc += 'FF';
  if(prev.toString(16).length == 1) {
    acc += '0' + prev.toString(16);
    return acc.toUpperCase();
  }
   acc += prev.toString(16);
   return acc.toUpperCase();
 }, '')
}
console.log(rgb(140,151,15))