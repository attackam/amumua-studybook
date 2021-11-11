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
 var rotateRight = function(head, k) {
  let count = 0;

  let tempHead = head;
  while (tempHead) {
    count++;
    tempHead = tempHead.next;
  }

  let index = count - k;
  while (index > 0) {
    index--;
    head = head.next;
  }

  let cur = head.next;
  head.next = null;
  while(cur) {
    cur = cur.next
  }
  cur.next = head;
  
  return cur;
};