function dataReverse(data) {
 let arr = [];
 for(let i = data.length; i > 0; i-=8){
  arr.push(data.slice(i - 8, i))
 }
 return arr.flat()
}
