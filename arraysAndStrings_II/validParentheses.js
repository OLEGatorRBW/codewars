function validParentheses(parenStr) {
    let arr = parenStr.split(' ');
    let stack = [];

    for(let i = arr.length - 1; i >= 0; i--){
        if(!isNaN(parseFloat(arr[i]))){
            stack.push(parseFloat(arr[i]));
            console.log(stack)
        } else {
            let number1 = stack.pop();
            let number2 = stack.pop();

            switch(arr[i]) {
                case '+':
                    stack.push(number1 + number2);
                    break;
                case '-':
                    stack.push(number1 - number2);
                    break;
                case '*':
                    stack.push(number1 * number2);
                    break;
                case '/':
                    stack.push(number1 / number2);
                    break;
            }
        }
    }
    return stack.pop()
}

