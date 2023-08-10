function scrollingText(text){
 let newArr = [];
 let str = ''
 for(let i = 0; i < text.length; i++) {
  str = (text.slice(i) + text.slice(0, i)).toUpperCase()
  newArr.push(str)
 }
return newArr
}
console.log(scrollingText("codewars"))