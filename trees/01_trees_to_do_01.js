class BTNode {
  constructor(value) {
    this.val = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  add(val) {
    let node = this.root
    if (node===null) {
      this.root = new BTNode(val)
      return this
    }
    while (1) {
      if (val < node.val) {
        if (node.left !== null) {
          node = node.left
        } else {
          node.left = new BTNode(val)
          return this
        }
      } else {
        if (node.right !== null) {
          node = node.right
        } else {
          node.right = new BTNode(val)
          return this
        }
      }
    }
  }

  max() {
    let node = this.root
    if (node===null) return 'undefined'
    while (node.right !== null) node = node.right
    return node.val
  }
  
  min() {
    let node = this.root
    if (node===null) return 'undefined'
    while (node.left !== null) node = node.left
    return node.val
  }

  size() {
    if (this.root===null) return 0
    const add = (node) => {
      let total = 1
      if (node.left) total += add(node.left)
      if (node.right) total += add(node.right)
      return total
    }
    return add(this.root)
  }

  isEmpty() {
    return this.root===null
  }
}

let tree = new BST
tree.add(7).add(2).add(-1).add(17)
console.log(JSON.stringify(tree, null, 4))
console.log('max: ' + tree.max())
console.log('min: ' + tree.min())
console.log('size: ' + tree.size())
console.log('isEmpty: ' + tree.isEmpty())