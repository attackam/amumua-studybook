function getIntersectionNode(headA, headB) {
  let hasSet = new Set();

  while (headA) {
    hasSet.set(headA.val, true);
    headA = headA.next;
  }

  while (headB) {
    if (hasSet.has(headB.val)) {
      return headB.val;
    }
    headB = headB.next;
  }

  return null;
}