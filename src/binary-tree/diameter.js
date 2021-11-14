/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @return {number}
*/
var diameterOfBinaryTree = function(root) {
  // 递归问题直接把根节点抛进去就好了
  let { maxValue } = findNodeMaxPath(root)
  return maxValue;
};

var findNodeMaxPath = function(node, maxValue = 0) {
  // 如果没有子节点就不用算了
  if (!node) {
      return { maxValue, maxCount: 0 };
  }

  // 把求解的路径交给左右两个节点去递归计算
  let leftMax = findNodeMaxPath(node.left, maxValue);
  let rightMax = findNodeMaxPath(node.right, maxValue);

  // 比较每个节点的最长路径
  maxValue = Math.max(
      ...[leftMax.maxValue, rightMax.maxValue, leftMax.maxCount + rightMax.maxCount]
  );
  // 记录每个节点的最长边， 给父节点使用
  maxCount = Math.max(leftMax.maxCount, rightMax.maxCount) + 1;
  return { maxValue, maxCount };
}