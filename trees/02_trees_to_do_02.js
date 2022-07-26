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

  height() {
    const heightHelper = (node) => {
      let leftLength = 1
      let rightLength = 1
      if (node.left) leftLength += heightHelper(node.left)
      if (node.right) rightLength += heightHelper(node.right)
      return Math.max(leftLength, rightLength)
    }
    return heightHelper(this.root)
  }
}

let tree = new BST
tree.add(7).add(2).add(-1).add(17)
console.log(JSON.stringify(tree, null, 4))
console.log('height: ' + tree.height())

tree = new BST
tree.add(1).add(2).add(3).add(4).add(5).add(6).add(7)
console.log(JSON.stringify(tree, null, 4))
console.log('height: ' + tree.height())