function min(arr, toReturn) {
 if (toReturn == 'value') return Math.min(...arr)
 if (toReturn == 'index') return arr.indexOf(Math.min(...arr));
}
