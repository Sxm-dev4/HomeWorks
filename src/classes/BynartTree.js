import { Node } from './Node';

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) {
        console.log(`Valor ${value} ya existe en el árbol.`);
        return;
      }
      
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  preOrder(node = this.root, result = []) {
    if (node !== null) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  inOrder(node = this.root, result = []) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  postOrder(node = this.root, result = []) {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  search(value, node = this.root) {
    if (node === null) {
      return false;
    }
    
    if (value === node.value) {
      return true;
    }
    
    if (value < node.value) {
      return this.search(value, node.left);
    } else {
      return this.search(value, node.right);
    }
  }

  toD3Format(node = this.root) {
    if (node === null) {
      return null;
    }

    const d3Node = {
      name: node.value.toString(),
      attributes: {
        isLeaf: node.isLeaf() ? 'Yes' : 'No'
      },
      children: []
    };

    if (node.left) {
      d3Node.children.push(this.toD3Format(node.left));
    }
    if (node.right) {
      d3Node.children.push(this.toD3Format(node.right));
    }

    return d3Node;
  }
}