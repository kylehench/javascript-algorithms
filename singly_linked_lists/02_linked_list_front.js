class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SLL {
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
  removeFront() {
    this.head = this.head.next
    return this
  }
  front() {
    return this.head.data
  }
  print() {
    console.log(JSON.stringify(this))
    return this
  }
}

SLL1 = new SLL()
SLL1.addFront(18)
.print()
.addFront(5)
.print()
.addFront(73)
.print()
.removeFront()
.print()

console.log(SLL1.front())
SLL1.print()
 .removeFront()
 .print()