var hasCycle = function (head) {
  let hasSet = new Set();
  while (head) {
    if (hasSet.has(head)) {
      return true;
    }

    hasSet.add(head);
    head = head.next;
  }

  return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle2 = function(head) {
  // 非空判断
  if (!head || !head.next) {
      return false;
  }
  let slow = head,
      fast = head.next;

  while (slow !== fast) {
    // 快指针跑到尽头说明不存在环
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next; // 快指针每次跑两步，争取早日超过慢指针一圈
  }

  return true;
};
