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
  let total = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    total++;
  }

  const count = Math.floor(total / k);
  let result, temp;
  for (let i = 0; i < count; i++) {
    let { prev, next } = reverseNode(head, k);
    head = next;

    if (i === 0) {
      result = prev;
      temp = result;
    } else {
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = prev;
    }
  }

  while (temp.next) {
    temp = temp.next;
  }
  temp.next = head;
  return result;
}

function reverseNode(cur, k) {
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
    prev,
    next,
  };
}
