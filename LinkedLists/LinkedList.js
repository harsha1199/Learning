class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insert(index, value) {
    if (index == 0) {
      this.addFirst(value);
      return;
    }

    if (index > this.size) {
      this.add(value);
      return;
    }
    let currentNode = this.traversList(index);
    const newNode = new Node(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.size++;
  }

  traversList(index) {
    let currentNode = this.head;
    while (index > 1) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    if (index > this.size) {
      console.log("Wrong index");
      return;
    } else {
      let currentNode = this.traversList(index);
      currentNode.next = currentNode.next.next;
      this.size--;
    }
  }

  reverse() {
    let currentNode = this.head;
    this.tail = this.head;
    let prevNode = null;
    while (currentNode.next != null) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    currentNode.next = prevNode;
    this.head = currentNode;
  }

  printLinkedList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

let myLinkedList = new LinkedList();
myLinkedList.add(10);
myLinkedList.add(5);
myLinkedList.add(6);
myLinkedList.add(9);
// console.log(myLinkedList.head);
// console.log(myLinkedList.tail);
myLinkedList.insert(5, 8);
myLinkedList.insert(0, 3);
myLinkedList.remove(0);
myLinkedList.printLinkedList();
myLinkedList.reverse();
myLinkedList.printLinkedList();
