function expandedForm(num) {
 let str = String(num);
 let res = str[0];
 for(let i = 1; i < str.length; i++){
  if (str[i] == '0') {
   res += '0' + '';
   continue
  }
   res += '0'.repeat(str.length - i ) + " + " + str[i];
 }
 return res
}
