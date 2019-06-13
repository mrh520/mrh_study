let PriorityQueue = (function () {
    const item = new WeakMap();
    class QueueElement {
        constructor(element, priority) {
            this.element = element;
            this.priority = priority;
        }
    }
    class PriorityQueue {
        constructor() {
            item.set(this, [])
        }
        enqueue(element, priority) {
            let queueElement = new QueueElement(element, priority);
            let added = false;
            let tmp = item.get(this);
            for (let i = 0; i < tmp.length; i++) {
                if (queueElement.priority < tmp[i].priority) {
                    tmp.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                tmp.push(queueElement);
            }
        }
        dequeue() {
            let tmp = item.get(this);
            if(this.isEmpty()){
                throw new Error("空队列")
            }
            return tmp.shift();
        }

        size() {
            let tmp = item.get(this);
            return tmp.length;
        }
        front() {
            let tmp = item.get(this);
            if (this.isEmpty()) {
                throw new Error("空队列")
            }
            return tmp[0];
        }
        isEmpty() {
            let tmp = item.get(this);
            return tmp.length > 0 ? false : true;
        }
        clear() {
            item.set(this, [])
        }
    }
    return PriorityQueue;
})()


let myPriority = new PriorityQueue();
myPriority.enqueue("mrh", 1);
myPriority.enqueue("mrh123", 1);
myPriority.enqueue("mrh666", 0);
console.log(myPriority.dequeue());
myPriority.clear();
console.log(myPriority.dequeue());


