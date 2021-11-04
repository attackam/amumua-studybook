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
    let fakeHead = new ListNode(0);
    let current = fakeHead;

    for (let index = 0; index < array.length; index++) {
        current.next = {
            val: array[index],
            next: null
        };
        current = current.next;
    }

    return fakeHead.next;
}

function generateArray(list) {
    let res = [];

    while (list) {
        res.push(list.val);
        list = list.next;
    }

    return res;
}