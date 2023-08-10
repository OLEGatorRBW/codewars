function bingo(ticket, win){
 let arr =  ticket.map((el) => {
  return el[0].split('').some(e => e.charCodeAt(0) == el[1])
 })
 let newArr =  arr.filter(e => e == true)
 return newArr.length >= win ? 'Winner!' : 'Loser!';
}
