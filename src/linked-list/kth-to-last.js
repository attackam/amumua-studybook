var kthToLast = function (head, k) {
  let count = 1;
  let cur = head;

  // 先求长度
  while (cur.next) {
    cur = cur.next;
    count++;
  }

  // 找到倒数K位在正着数时候的位置
  let index = count - k;
  while (index) {
    head = head.next;
    index--;
  }

  //返回节点
  return head && head.val;
};

var kthToLast2 = function (head, k) {
  let cur = head;
  while (cur) {

    // 先让快指针走K步，然后再一起走
    cur = cur.next;
    if (k) {
      k--;
    } else {
      head = head.next;
    }
  }

  return head && head.val;
};
