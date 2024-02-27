function solve(arr){
    console.log(arr)
      let obj = {};
      for(let key of arr){
          if(!obj[key]){
              obj[key] = 1;
          } else {
              obj[key]++;
          }
      }
      console.log(obj)
  
      let arrPairs = Object.entries(obj);
      console.log(arrPairs)
  
      let sortArrPairs = arrPairs.sort((a, b) => {
        if(a[1] == b[1]){
            return a[0] - b[0]
        }
        return b[1] - a[1]
      });
      console.log(sortArrPairs)
  
      let res = []
      sortArrPairs.forEach(([num, count]) => {
          res.push(...Array(count).fill(Number(num)))
      })
      
      return res
  }

console.log(solve([ 1,
    2,
    3,
    3,
    6,
    7,
    7,
    7,
    12,
    14,
    15,
    20,
    21,
    21,
    23,
    23,
    27,
    28,
    28,
    29,
    30,
    31,
    32,
    33,
    35,
    37,
    37,
    37,
    39,
    40,
    45,
    46,
    49,
    50 ]))
    // [7, 7, 7, 37, 37, 37, 3, 3, 21, 21, 23, 23, 28, 28, 1, 2, 6, 12, 14, 15, 20, 27, 29, 30, 31, 32, 33, 35, 39, 40, 45, 46, 49, 50], instead got: 
    // [7, 7, 7, 37, 37, 37, 3, 3, 21, 21, 23, 23, 28, 28, 29, 15, 20, 6, 1, 27, 12, 2, 30, 31, 32, 33, 35, 14, 39, 40, 45, 46, 49, 50]