class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    currentNode.next.prev = newNode;
    newNode.prev = currentNode;
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
      this.head.prev = null;
      this.size--;
      return;
    }
    if (index > this.size) {
      console.log("Wrong index");
      return;
    } else {
      let currentNode = this.traversList(index);
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.size--;
    }
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

let myDoubleLinkedList = new DoubleLinkedList();
myDoubleLinkedList.add(10);
myDoubleLinkedList.add(5);
myDoubleLinkedList.add(6);
myDoubleLinkedList.add(9);
// console.log(myLinkedList.head);
// console.log(myLinkedList.tail);
myDoubleLinkedList.insert(5, 8);
myDoubleLinkedList.insert(0, 3);
myDoubleLinkedList.remove(1);
myDoubleLinkedList.printLinkedList();
