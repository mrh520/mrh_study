function LinkList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }
    let length = 0;
    let head = null;
    this.append = function (element) {
        let node = new Node(element);
        let current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            //循环列表，直到找到最后一项
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head, previous, index = 0;
            if (position === 0) {
                head = current.next;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //将previous与current的下一项连接起来，跳过current，从而移除它
                previous.next = current.next;
            }
            length--;
            return current.element

        }
    }
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
}

let list = new LinkList();
list.append(10);
list.append(20);
