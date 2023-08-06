function maskify(cc) {
 let end = cc.slice(-4);
 let start = cc.slice(0, -4)
               .split('')
               .map(x => x.replace(x, "#"))
               .join('');
 return start + end;
}
