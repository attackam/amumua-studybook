// JSON.parse(readline())
const list1 = generateList([1, 2, 5]);
const list2 = generateList([2, 3, 4]);

console.log(generateArray(findNextNode(list1, list2)));

function findNextNode(node1, node2) {
    if (!node1) return node2;
    if (!node2) return node1;

    if (node1.val < node2.val) {
        node1.next = findNextNode(node1.next, node2);
        return node1;
    } else {
        node2.next = findNextNode(node1, node2.next);
        return node2;
    }
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function generateList(array) {
    // 非空判断
    if (!array || !array.length) {
        return null;
    }

    let node = new ListNode(array[0]);
    let current = node;

    for (let index = 1; index < array.length; index++) {
        current.next = new ListNode(array[index]);
        current = current.next;
    }

    return node;
}

function generateArray(list) {
    let res = [];

    while (list) {
        res.push(list.val);
        list = list.next;
    }

    return res;
}