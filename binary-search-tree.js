class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) this.root = new Node(val)
    let current = this.root
    while (current.val !== val) {
      if (current.val < val) {
        !current.right ? current.right = new Node(val) : current = current.right 
      } else {
        !current.left ? current.left = new Node(val) : current = current.left
      }
    }
    return this.root
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) this.root = new Node(val)

    const insertHelper = (node = this.root) => {
      if (node.val !== val) {
        !node.right ? node.right = new Node(val) : insertHelper(node.right)
      } else {
        !node.left ? node.left = new Node(val) : insertHelper(node.left)
      }
    }
    return this.root
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined
    let current = this.root;

    while (current) {
      if (current.val === val) return current;
      current = val < current.val ? current.left : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined

    const finder = (node = this.root) => {
      if (node.val !== val && !node.right && !node.left) return undefined
      if (node.val !== val) {
        if (node.right) return finder(node.right)
        if (node.left) return finder(node.left)
      } 
      else return node
    }
    return finder()
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return undefined
    const vals = []

    const traverse = (node = this.root) => {
      vals.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse()
    return vals
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return undefined
    const vals = []

    const traverse = (node = this.root) => {
      if (node.left) traverse(node.left) 
      vals.push(node.val)
      if (node.right) traverse(node.right) 
    }
    traverse()
    return vals
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return undefined
    const vals = []

    const traverse = (node = this.root) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      vals.push(node.val)
    }
    traverse()
    return vals
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return undefined
    const queue = []
    const vals = []
    queue.push(this.root)

    while (queue.length > 0) {
      const temp = queue.shift()
      vals.push(temp.val)
      if (temp.left) queue.push(temp.left)
      if (temp.right) queue.push(temp.right)
    }
    return vals
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
