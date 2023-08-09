function filterHomogenous(arrays) {
 return arrays.filter((el) => {
  if(el.length == 0) return false;
  return el.every(e => typeof e === typeof el[0]) 
 })
}


