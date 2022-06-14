// Node: new node for a queue
class Node {
	constructor(val) {
    	this.val = val;
    	this.next = null;
  	}
}

// Queue: chained-together nodes where you can add to end and remove from front
// What tells me that an instance of Queue will be an object?
class Queue {
  	constructor() {
    	this.first = null;
    	this.last = null;
    	this.size = 0;
		this._list = new LinkedList();
  	}

	traverse() {
		if (this.size === 0) {
			throw new Error('List is empty!')
		}
		let curr = this.first;
		while (curr) {
			console.log(curr.val)
			curr = curr.next;
		}
	}

	// Add new node/val to end of queue (push). Returns undefined.
	enqueue(val) {
		const newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		}
		else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
	}

	// Remove node/val from start or queue and return its value (shift).
	// Throw error if queue is empty
	dequeue() {
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
			this.first = this.first.next
			this.size--;
			return hold;
		}
	}

	// Return value of first node/val in queue
	peek() {
		if (this.size === 0) {
			throw new Error("List is empty!")
		}
		else {
			return this.first.val;
		}
	}

	// Return true if queue is empty, otherwise false
	isEmpty() {
		if (this.size === 0) return true;
		else {return false}
	}

}

// module.exports = Queue;

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// LinkedList: chained together nodes
class LinkedList {
	constructor(vals = []) {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;  
	  for (let val of vals) this.push(val);
	}
  
	traverse() {
	  let currNode = this.head;
	  while (currNode) {
		console.log(currNode.val)
		currNode = currNode.next;
	  }
	}
  
	// Appends a new node with value val to the tail. Returns undefined
	push(val) {
	  const newNode = new Node(val);
	  if (this.length === 0) {
		this.head = newNode;
		this.tail = newNode;
	  }
	  else {
		this.tail.next = newNode;
		this.tail = newNode;
	  }
	  this.length += 1
	}
  
	// Return and remove first item. Throws error if list is empty.
	shift() {
	  if (this.length === 0) {
		throw new Error("List is already empty.")
	  }
	  let shiftVal = this.head.val;
	  this.head = this.head.next;
	  this.length -= 1;
	  if (this.length === 1) {
		this.tail = this.head;
	  }
	  return shiftVal;
	}
  }