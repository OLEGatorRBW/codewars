function generateShape(integer){
 let simbol = '+';
 let string = '';

 for(let i = 0; i < integer; i++) {
  string = simbol.repeat(integer);
  string =  string + ('\n' + string).repeat(integer-1);  
 }

 return string;
}
