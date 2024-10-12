class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  //    1--2--3--4--5 -> k(2) = 4
  // d  l     r

  findKthFromEnd(k) {
    let left = this.head;
    let right = this.head;

    while (k > 0 && right) {
      right = right.next;
      k -= 1;
    }

    while (right) {
      right = right.next;
      left = left.next;
    }

    return left;
  }

  removeNthNodeFromEnd(n) {
    let dummy = { value: 0, next: this.head };
    let left = dummy;
    let right = this.head;

    while (n > 0 && right) {
      right = right.next;
      n -= 1;
    }

    while (right) {
      right = right.next;
      left = left.next;
    }

    left.next = left.next.next;
    return dummy.next;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
  console.log(kthNodeFromEnd.value);
} else {
  console.log("Not found");
}

console.log(myLinkedList.removeNthNodeFromEnd(2));

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  4
  5
  2th node from the end:
  4
*/
