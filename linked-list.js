/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return undefined;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return undefined;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return "error";
    let currentNode = this.head;
    let currentTail = currentNode;
    while (currentNode.next) {
      currentTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = currentTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let currentNode = this.head;
    if (!this.head) return "error empty list";
    this.head = currentNode.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) return "empty list";
    let currentNode = this.head;
    let counter = 0;
    if (idx < 0 || idx >= this.length) return "error";
    while (counter !== idx) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (!this.head) return "error, empty list";
    if (idx < 0 || idx >= this.length) return "error";
    let currentNode = this.head;
    let counter = 0;

    while (counter !== idx) {
      currentNode = currentNode.next;
      counter++;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    const newNode = new Node(val);
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    let currentNode = this.head;
    let prevNode = this.head;
    let counter = 0;
    while (counter !== idx) {
      let temp = currentNode;
      currentNode = currentNode.next;
      prevNode = temp;
      counter++;
    }
    newNode.next = currentNode;
    prevNode.next = newNode;
    this.length += 1;
    return true;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (!this.head) return "error, empty list";
    if (idx < 0 || idx >= this.length) return "error";

    let currentNode = this.head;
    let prevNode = currentNode;
    let counter = 0;
    while (counter !== idx) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
    prevNode.next = currentNode.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) return 0;
    let currentNode = this.head;
    let counter = 0;
    let total = 0;
    while (currentNode) {
      total += currentNode.val;
      counter++;
      currentNode = currentNode.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
