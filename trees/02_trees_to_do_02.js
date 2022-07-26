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
  
  heightHelper() {
    if (node===undefined) node = this.root
    console.log(JSON.stringify(node))
    let leftLength = 1
    let rightLength = 1
    if (node.left) leftLength += heightHelper(node.left)
    if (node.right) rightLength += heightHelper(node.right)
    
    if (type==='max') return Math.max(leftLength, rightLength)
    // otherwise return shortest branch
    return Math.min(leftLength, rightLength)
  }
  
  height = (type='max') =>  {
    // Build a height() method on the BST object that returns the total height of the tree – the longest sequence of nodes from the root node to leaf node.
    const heightHelper = (node) => {
      let leftLength = 1
      let rightLength = 1
      if (node.left) leftLength += heightHelper(node.left)
      if (node.right) rightLength += heightHelper(node.right)
      if (type==='max') return Math.max(leftLength, rightLength)
      return Math.min(leftLength, rightLength)
    }
    return heightHelper(this.root)
  }

  isBalanced() {
    // Write isbalanced() method to indicate whether a BST is balanced. For this challenge, consider a tree balanced when all nodes are balanced. A BTNode is balanced if heights of its left subtree and right subtree differ by at most one.
    if (!this.root.left || !this.root.right) return 'root missing left and/or right subtree'
    const heightHelper = (node) => {
      let leftLength = 1
      let rightLength = 1
      if (node.left) leftLength += heightHelper(node.left)
      if (node.right) rightLength += heightHelper(node.right)
      return Math.max(leftLength, rightLength)
    }
    const leftLength = heightHelper(this.root.left)
    const rightLength = heightHelper(this.root.right)
    if (Math.abs(rightLength-leftLength)<=1) return true
    return false
  }

  static arrayToBst(array) {
    // Given an array that is sorted in ascending order, return a BST object that is height-balanced.
    let bst = new BST
    const convert = (array) => {
      if (array.length===1) {
        return new BTNode(array[0])
      }
      const middleIdx = Math.trunc(array.length/2)
      const node = new BTNode(array[middleIdx])
      node.left = convert(array.slice(0,middleIdx))
      if (array.length>2) {
        node.right = convert(array.slice(middleIdx+1,array.length))
      }
      return node
    }
    bst.root = convert(array)
    return bst
  }

  static closestCommonAncestor(bst, val1, val2) {
    // Given a BST and two contained values, return the value of the closest common ancestor node. For each node, the chain up to root (including self) represents that node’s ancestry. Return the value of the node in both ancestor chains that is closest to both.
    let runner = bst.root
    while ((val1 < runner.val)===(val2 < runner.val)) {
      if (val1===runner.val || val2===runner.val) break
      if (val1 < runner.val) {
        runner = runner.left
      } else {
        runner = runner.right
      }
    }
    return runner.val
  }
}

let tree = new BST
tree.add(7).add(2).add(-1).add(17)
console.log(JSON.stringify(tree, null, 4))
console.log('height: ' + tree.height())
console.log('is balanced: ' + tree.isBalanced())

tree = new BST
tree.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(-1)
console.log(JSON.stringify(tree, null, 4))
console.log('height: ' + tree.height())
console.log('is balanced: ' + tree.isBalanced())

tree = BST.arrayToBst([1,2,3,4,5,6,7,8,9,10])
console.log(JSON.stringify(tree, 0, 4))
console.log('is balanced: ' + tree.isBalanced())
console.log('closest common ancestor: ' + BST.closestCommonAncestor(tree, 1, 4))
console.log('closest common ancestor: ' + BST.closestCommonAncestor(tree, 7, 4))
console.log('closest common ancestor: ' + BST.closestCommonAncestor(tree, 9, 10))
console.log('closest common ancestor: ' + BST.closestCommonAncestor(tree, 7, 10))