obfuscate = function(email) {
 return email.split('').map((e) => {
  if(e == '@') return ' [at] '
  if(e == '.') return ' [dot] '
  return e
 }).join('')
}
