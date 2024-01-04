"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.val === val) return this;

    if (val < this.val && this.left) return this.left.findRecursively(val);

    if (val > this.val && this.right) return this.right.findRecursively(val);

  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    if (val < this.val) {
      if (this.left) return this.left.insertRecursively(val);
      this.left = new Node(val);
      return this.left;
    } else if (val > this.val) {
      if (this.right) return this.right.insertRecursively(val);
      this.right = new Node(val);
      return this.right;
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {
    let result = [];
    let stack = [this];

    while (stack.length) {
      let current = stack.pop();
      result.push(current.val);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);

    }
    return result;
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    let results = [];

    function _dfsInOrder(node) {
      if (node === null) return;
      if (node.left) _dfsInOrder(node.left);
      results.push(node.val);
      if (node.right) _dfsInOrder(node.right);
    }

    _dfsInOrder(this);
    return results;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {
    let results = [];

    function _dfsInOrder(node) {
      if (node === null) return;
      if (node.left) _dfsInOrder(node.left);
      if (node.right) _dfsInOrder(node.right);
      results.push(node.val);
    }

    _dfsInOrder(this);
    return results;
  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    this.root.insertRecursively(val);
    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;

    let current = this.root;
    while (current) {
      if(current === null) break;

      if (val === current.val) return current;

      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;
    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return [];
    return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return [];
    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return [];
    return this.root.dfsPostOrder();

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    let result = [];
    let queue = [this.root]

    while (queue.length) {
      let current = queue.shift();
      if (current) {
        result.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right)
      }
    }
    return result;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
