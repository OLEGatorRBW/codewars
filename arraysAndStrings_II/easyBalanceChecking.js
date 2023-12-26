function balance(book) {
    let clean = 'Original Balance: ' + book.replace(/^\n|[!=:?;,{}]/gm, '');
    
    let arr = clean.split(/\n/).filter(Boolean);

    for(let i = 0; i < arr.length; i++) {
       
        let reg = /\d+(\.\d+)?$/g;


        arr[i] = arr[i].replace(reg, function(match){
            return parseFloat(match).toFixed(2);
        } )
    }
  
    let originalBalance = arr.join(' ').match(/\d+\.\d+/)[0];
    for(let i = 1; i < arr.length; i++){
        let reg = /\d+\.\d+$/;
        let cur = +arr[i].match(reg)[0];
        let total = originalBalance - cur;
        arr[i] = arr[i] + ` Balance ${total.toFixed(2)}`;
        originalBalance = total
    }


    let total = 0
    for(let i = 1; i < arr.length; i++) {
        let cur = +arr[i].match(/\d+\.\d+/)[0];
        total += cur
    }
  
    let average = total/(arr.length - 1)

    let str = arr.join('\r\n');
    let newStr = `${str}\r\nTotal expense  ${total.toFixed(2)}\r\nAverage expense  ${average.toFixed(2)}`
    
    return newStr
}
var b1 = `1000

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`

console.log(balance(b1));

