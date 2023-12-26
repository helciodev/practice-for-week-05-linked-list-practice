class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    if (!this.head) {
      this.head = new DoublyLinkedListNode(val);
      this.tail = this.head;
      this.length++;
    } else {
      let newNode = new DoublyLinkedListNode(val);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }
  }

  addToTail(val) {
    if (!this.tail) {
      this.head = new DoublyLinkedListNode(val);
      this.tail = this.head;
      this.length++;
    } else {
      let newNode = new DoublyLinkedListNode(val);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
