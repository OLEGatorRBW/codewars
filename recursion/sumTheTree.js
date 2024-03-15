function sumTheTreeValues(root){
    if(!root){
        return 0;
    }
    return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
}
console.log(sumTheTreeValues({value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}}))