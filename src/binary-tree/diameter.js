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
  let { maxValue } = findNodeMaxPath(root)
  return maxValue;
};

var findNodeMaxPath = function(node, maxValue = 0) {
  if (!node) {
      return { maxValue, maxCount: 0 };
  }

  let leftMax = findNodeMaxPath(node.left, maxValue);
  let rightMax = findNodeMaxPath(node.right, maxValue);

  maxValue = Math.max(
      ...[leftMax.maxValue, rightMax.maxValue, leftMax.maxCount + rightMax.maxCount]
  );
  maxCount = Math.max(leftMax.maxCount, rightMax.maxCount) + 1;
  return { maxValue, maxCount };
}