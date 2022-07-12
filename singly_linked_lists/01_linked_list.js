class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  addFront(data) {
    let newNode = new Node(data)

    // add head node if head is not present
    if (!this.head) {
      this.head = newNode
      return this
    }

    // insert new node if head node already present
    newNode.next = this.head
    this.head = newNode
    return this
  }
}