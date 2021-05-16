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
        const newNode = new Node(value);
        if(this.root === null){
            this.rooot = newNode
        } else {
            let currentNode = this.root;
            while(true){
                if(value< currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left

                } else {
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this
                    }
                    currentNode = currentNode.right

                }
            }
        }


    }

    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if( value > currentNode.value){
                currentNode = currentNode.right;
            } else if(currentNode.value === value){
                return currentNode;
            }
        }

        return false;
    }

    remove(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left; 
            } 
            else if(value > currentNode.value){
                currentNode = currentNode.right; 
            } else if (currentNode.value = value){
                // Case 1

                if(currentNode.right === null ){
                    if(parentNode === null){
                        this.root = currentNode.left;
                    } 
                    else {
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.left;
                        }
                        else if(currentNode.value > parentNode.value){
                            parentNode.right = currentNode.right;
                        }
                    }
                }

                // Case 2

                else if(currentNode.right.left === null ){
                    if(parentNode === null){
                        this.root = currentNode.left;
                    } 
                    else {
                        currentNode.right.left === currentNode.left
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.right;
                        }
                        else if(currentNode.value > parentNode.value){
                            parentNode.right = currentNode.right;
                        }
                    }
                }

                // case 3

                else {

                    let leftMost = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while(leftMost.left !== null){
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }


                    leftMostParent.left =  leftMost.right;
                    leftMost.left = currentNode.left;
                    leftMost.right = currentNode.right;


                    if(parentNode === null ){
                        this.root = leftMost;
                    } else {
                        if(currentNode.value <parentNode.value){
                            parentNode.left = leftMost;
                        } else if( currentNode.value > parentNode.value){
                            parentNode.right = leftMost
                        }
                    }
                }
            
            return true


            }
        }
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

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  