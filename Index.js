class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
       

    }

    lookup(value){
        
    }

    remove(value){
       
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
// tree.insert(10);
// tree.insert(10);
// tree.insert(10);
// tree.insert(10);
// tree.insert(10);
// tree.insert(10);
// tree.insert(10);
// tree.lookup(10);
JSON.stringify(traverse(tree.root))
console.log('tree', JSON.stringify(traverse(tree.root)))
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  