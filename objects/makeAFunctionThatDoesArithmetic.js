function arithmetic(a, b, operator){
    let obj = {
        add: '+',
        subtract: '-',
        divide: '/',
        multiply: '*'
    }
    let c = obj[operator]
    if (obj[operator] == '+') return a + b;
    if (obj[operator] == '-') return a - b;
    if (obj[operator] == '*') return a * b;
    if (obj[operator] == '/') return a / b;
}
