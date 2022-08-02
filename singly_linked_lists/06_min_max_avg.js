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

  contains(value) {
    let runner = this.head
    while (runner!==null) {
      if (runner.data===value) return true
      runner = runner.next
    }
    return false
  }

  length() {
    let runner = this.head
    let count = 0
    while (runner!==null) {
      count++
      runner = runner.next
    }
    return count
  }

  display() {
    let runner = this.head
    let content = ''
    if (runner!==null) {
      content += runner.data
      runner = runner.next
    }
    while (runner!==null) {
      content += `, ${runner.data}`
      runner = runner.next
    }
    console.log(content)
  }

  max() {
    let runner = this.head
    let maximum = runner.data
    while (runner.next) {
      runner = runner.next
      if (runner.data>maximum) maximum = runner.data
    }
    return maximum
  }

  min() {
    let runner = this.head
    let minimum = runner.data
    while (runner.next) {
      runner = runner.next
      if (runner.data<minimum) minimum = runner.data
    }
    return minimum
  }

  average() {
    let runner = this.head
    let average = runner.data
    let count = 1
    while (runner.next) {
      runner = runner.next
      count++
      average = (1-1/count)*average + (1/count)*runner.data
    }
    return average
  }
}

SLL1 = new SLL()
SLL1.addFront(18)
.addFront(5)
.addFront(73)

console.log(SLL1.max())
console.log(SLL1.min())
console.log(SLL1.average())