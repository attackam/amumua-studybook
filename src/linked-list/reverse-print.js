var reversePrint = function (head) {
  let result = [];
  while (head) {
    result.unshift(head.val);
    head = head.next;
  }

  return result;
};
