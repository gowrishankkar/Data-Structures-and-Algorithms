// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      let finalSum = []
      
      getNodeSums(root, 0, finalSum);
      return finalSum;
  }
  
  function getNodeSums(node, currentSum, finalSum){
      if(!node) return ;
      
      const newSum = currentSum + node.value;
      if(!node.left && !node.right){
          finalSum.push(newSum);
          return;
      }
      getNodeSums(node.left, newSum, finalSum)
      getNodeSums(node.right, newSum, finalSum)
      
  }
  

  