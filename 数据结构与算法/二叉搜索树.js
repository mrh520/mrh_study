function BinarySeachTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    let root = null;
    this.insert = function (key) {
        let newNode = new Node(key);
        if (root === null) {
            root = newNode;
        }
        else {
            insertNode(root, newNode)
        }
    }
    let insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }
    this.search = function (key) {
        return searchNode(root, key);
    }

    let searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        }
        else if (key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true;
        }
    }

    this.min = function () {
        return minNode(root);
    }

    let minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    this.max = function () {
        return maxNode(root);
    }
    let maxNode = function (node) {
        if (node) {
            while (node && node.right) {
                node = node.right;
            }
            return node.key
        }
        return null;
    }
}


let tree = new BinarySeachTree();
tree.insert(11);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(12);
tree.insert(14);
tree.insert(18);
tree.insert(25);
console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');