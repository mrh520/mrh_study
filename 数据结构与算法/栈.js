let Stack = (function () {
    const item = new WeakMap();
    class Stack {
        constructor() {
            item.set(this, []);
        }
        push(element) {
            let tmp = item.get(this);
            tmp.push(element);
        }
        pop() {
            let tmp = item.get(this);
            return tmp.pop();
        }
        size() {
            let tmp = item.get(this);
            return tmp.length;
        }
        clear() {
            let tmp = item.set(this, []);

        }
        isEmpty() {
            let tmp = item.get(this);
            return tmp.length > 0 ? false : true
        }
        peek() {
            let tmp = item.get(this);
            if (this.isEmpty()) {
                throw new Error("空栈");
            }
            return tmp[tmp.length - 1];
        }

    }
    return Stack;
})()

let myStack = new Stack();
myStack.push(1);
myStack.push(20);
console.log(myStack.size());
//myStack.clear();
console.log(myStack.size());
console.log(myStack.isEmpty());
console.log(myStack.peek());




