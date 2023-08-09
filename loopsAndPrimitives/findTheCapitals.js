var capitals = function (word) {
 return  word.split('').map((el, i) => {
  if (el == el.toUpperCase()) return i
 }).filter(el => el != undefined)
};
