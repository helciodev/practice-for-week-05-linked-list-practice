class LinkedListNode {
  constructor(val, next) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    this.head = new LinkedListNode(val, this.head);
    this.length++;
  }

  addToTail(val) {
    if (!this.head) {
      this.head = new LinkedListNode(val, this.head);
      this.length++;
      return;
    }

    let isTrue = true;
    let current = this.head;
    while (isTrue) {
      if (!current.next) {
        current.next = new LinkedListNode(val, null);
        this.length++;
        isTrue = false;
      }
      current = current.next;
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

const ll = new LinkedList();

ll.addToTail(12);
ll.addToTail(13);
ll.print();

module.exports = LinkedList;
