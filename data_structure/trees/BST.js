class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      let newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
        return this;
      } else {
        let current = this.root;
        while (true) {
          if (current.value === value) return undefined;
          if (value < current.value) {
            if (current.left === null) {
              current.left = newNode;
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }

    contains(value) {
        if(this.root == null) return false;
        let current = this.root;
        let found = false;
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        return false;
    }

    BFS() {
      let node = this.root;
      let queue = [];
      let data = [];
      queue.push(node);
      while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
      }
      return data;
    }

  }
  
  let tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(15);
  tree.insert(5);
  tree.insert(2);
  tree.contains(5);
  console.log(JSON.stringify(tree));