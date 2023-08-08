function findShort(s){
 return s.split(' ').reduce((a, b) => b.length < a.length ? a = b : a ).length
}
