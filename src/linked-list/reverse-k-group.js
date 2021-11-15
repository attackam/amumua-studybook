/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  // 一个一组就不用旋转了
  if (k === 1) {
    return head;
  }
  // 创建一个空节点， 待会儿就不用每次循环都要判断是否头节点了。结果返回result.next即可
  let result = { val: 0, next: null };
  let cur = head;

  let prev = result; // 缓存上一个末尾节点
  
  while (cur) {
    let index = 1;
    let temp = cur;
    while (index < k && temp.next) {
      temp = temp.next;
      index++;
    }

    const next = temp && temp.next;

    // 满足k个一组，做旋转操作， 不满足则游戏结束
    if (index === k) {
      let { first, last } = reverseNode(cur, k);
      prev.next = first; // 上一轮的尾节点指向这一轮的头节点
      prev = last;
    } else {
      prev.next = cur;
    }

    cur = next;
  }

  return result.next;
}

// 翻转链表前K个元素
function reverseNode(cur, k) {
  let last = cur; // 当前的头节点翻转后就是尾节点

  let prev = null;
  let next = null;

  while (k) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    k--;
  }

  return {
    first: prev,
    last,
  };
}
