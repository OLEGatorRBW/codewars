function positiveSum(arr) {
 return arr.reduce((acc, prev) => {
  return (prev > 0) ? acc += prev : acc
 },0)
}