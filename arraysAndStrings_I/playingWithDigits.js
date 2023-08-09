function digPow(n, p){
 let number = String(n).split('').reduce((acc, prev) => {
   acc += Math.pow(prev, p);
   p += 1;
   return acc;
 }, 0)
 return (number % n == 0) ? number / n : -1;
}
