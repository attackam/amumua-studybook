// 匹配括号， 这道题用堆栈解决，先入后出

const str = "({})()[]{}";
console.log(validateStr(str));

function validateStr(str) {
    const n = str.length;
    // 先建立起对应关系
    let map = new Map();
    map.set("(", ")");
    map.set("{", "}");
    map.set("[", "]");

    let stack = [];
    for (let i = 0; i < n; i++) {
      let cur = str.charAt(i);
      // 判断是否左括号, 是的话直接入库，不是的话出库匹配
      if (map.has(cur)) {
          stack.push(cur);
      } else {
          if (stack.length === 0 || map.get(stack[stack.length - 1]) !== cur) {
              return false;
          }
          stack.pop();
      }
    }

    // 循环结束，说明没有不符合条件的情况， 这时候判断是否还有左括号没匹配即可
    return stack.length === 0;
}
