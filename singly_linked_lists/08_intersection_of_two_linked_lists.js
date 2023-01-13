// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.
// Note that the linked lists must retain their original structure after the function returns.

var getIntersectionNode = function(headA, headB) {
  let runnerA = headA
  let aSet = new Set()
  while (runnerA) {
    aSet.add(runnerA)
    runnerA = runnerA.next
  }
  let intersectNode = undefined
  let runnerB = headB
  while (runnerB) {
    if (aSet.has(runnerB)) {
      intersectNode = runnerB
      break
    }
    runnerB = runnerB.next
  }
  return intersectNode
};