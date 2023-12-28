function validParentheses(parenStr) {
    let arr = parenStr.split('');
    if(arr.length % 2) return false
    let stack = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == '(') {
            stack.push(arr[i]);
        } else {
            if (arr[i] == ')' && stack.pop() != '(') {
                return false
             }
        }
    } 
    if(stack.length != 0) return false
    return stack.length != 0
}
