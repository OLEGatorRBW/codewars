class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function maxSum(root) {
    if(!root) return 0;
    if(root.left == null || root.right == null) return root.value;
    const leftSum = maxSum(root.left);
    const rightSum = maxSum(root.right);

    return root.value + Math.max(leftSum, rightSum)
}
const root = new TreeNode(17, new TreeNode(3, new TreeNode(2)),
             new TreeNode(-10, new TreeNode(16), new TreeNode(1, new TreeNode(13))));
console.log(maxSum(root))