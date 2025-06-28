class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
const node = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));

function hasPathSum(root, targetSum) {
    if (!root) return false; // 空节点
    if(targetSum < 0) return false;
    // 叶子节点：检查是否满足目标值
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }
    // 递归检查左右子树（目标值减去当前值）
    return hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val);
}