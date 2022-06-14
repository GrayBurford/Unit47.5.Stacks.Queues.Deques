// Node: new node for a stack
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Stack: chained-together nodes where you can remove or add to the top.
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Add new node/val to top of stack. Returns undefined.
    push(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first
            this.first = newNode;
        }
        this.size++;
    }

    // Remove top node/val from stack and return its value. Throw error if empty.
    pop() {
        if (this.size === 0) {
            throw new Error("List is already empty!")
        }
        else if (this.size === 1) {
            let hold = this.first.val;
            this.first = null;
            this.last = null;
            this.size--;
            return hold;
        }
        else {
            let hold = this.first.val;
            this.first = this.first.next;
            this.size--;
            return hold;
        }
    }

    // Return val of top node in stack
    peek() {
        if (this.size === 0) {
            throw new Error("List is empty!")
        } else {
            return this.first.val;
        }
    }

    // Return true is stack is empty, otherwise false.
    isEmpty() {
        return this.size === 0;
    }
}

    // module.exports = Stack;
