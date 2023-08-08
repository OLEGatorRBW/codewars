function getCount(str) {
 let arr = ['A', 'E', 'I', 'O', 'U'];

 return str.split('').filter(el => arr.includes(el.toUpperCase()) == true).length
}
