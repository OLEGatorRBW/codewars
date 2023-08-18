function twoSum(numbers, target) {
 for(let i = 0; i < numbers.length; i++){
  let dif = target - numbers[i];
  if(numbers.indexOf(dif) != -1 && numbers.indexOf(dif) != i) return [numbers.indexOf(dif), i]
 }
}
