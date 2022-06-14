// Node: new node for a deque
class Node {
	constructor(val) {
    	this.val = val;
    	this.next = null;
		this.prev = null;
  	}
}

// Doubly-linked list with Deque methods
class Deque {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

    // console.log each val, beginning to end
	print() {
        if (this.isEmpty()) throw new Error('List is empty!')
		let curr = this.head;
		while (curr) {
			console.log(curr.val);
			curr = curr.next;
		}
	}

	// Add val to beginning.
	appendLeft(val) {
		const node = new Node(val);
		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			let temp = this.head;
			this.head = node;
			node.next = temp;
			temp.prev = node;
		}
		this.length++
	}

	// Add val to end.
	appendRight(val) {
		const node = new Node(val);
		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			let temp = this.tail;
			this.tail = node;
			node.prev = temp;
			temp.next = node;
		}
		this.length++
	}

	// Remove val from beginning and return val.
	popLeft() {
		if (this.isEmpty()) throw new Error('List is empty!')
		else if (this.length === 1) {
			let val = this.head.val;
			this.head = null;
			this.tail = null;
			this.length--;
			return val;
		} else {
			let val = this.head.val;
			this.head = this.head.next;
			this.head.prev = null;
			this.length--;
			return val;
		}
	}

	// Remove val from end and return val.
	popRight() {
		if (this.isEmpty()) throw new Error('List is empty!')
		else if (this.length === 1) {
			let val = this.tail.val;
			this.head = null;
			this.tail = null;
			this.length--;
			return val;
		} else {
			let val = this.tail.val;
			this.tail = this.tail.prev;
			this.tail.next = null;
			this.length--;
			return val;
		}
	}

	// Return but don't remove beginning val.
	peekLeft() {
		if (this.isEmpty()) throw new Error('List is empty!')
		else {
			return this.head.val;
		}
	}

	// Return but don't remove end val.
	peekRight() {
		if (this.isEmpty()) throw new Error('List is empty!')
		else {
			return this.tail.val;
		}
	}
	
	// Are there any items in the Deque?
	isEmpty() {
		return this.length === 0;
	}
}