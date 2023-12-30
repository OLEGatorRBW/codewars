function calculate(expression) {
    let arr = expression.split(' ');
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        console.log(newArr)
        if(!isNaN(parseFloat(arr[i]))){
            newArr.push(parseFloat(arr[i])) //3 2 2
        } else{
           newArr.push(eval(newArr.pop() + arr[i] + newArr.pop()))
        }
    }
    return eval(newArr.pop())
    // return Number(expression);
}
console.log(calculate('12'))