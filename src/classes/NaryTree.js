import {Node} from './Node.js';

 export class NaryTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  dfs(callback, node = this.root, level = 0) {
    if (!node) return;
    if (callback) callback(node, level);
    node.children.forEach(child => {
      this.dfs(callback, child, level + 1);
    });
  }

  bfs(callback) {
    if (!this.root) return;
    if (!callback) return;
    const queue = [{ node: this.root, level: 0 }];
    while (queue.length > 0) {
      const { node, level } = queue.shift();
      callback(node, level);
      node.children.forEach(child => {
        queue.push({ node: child, level: level + 1 });
      });
    }
  }

  printDFS() {
    console.log('=== DFS (Búsqueda en Profundidad) ===');
    this.dfs((node, level) => {
      const indent = '  '.repeat(level);
      console.log(`${indent}${node.value.title}`);
    });
  }

  printBFS() {
    console.log('=== BFS (Búsqueda en Amplitud) ===');
    this.bfs((node, level) => {
      const indent = '  '.repeat(level);
      console.log(`${indent}${node.value.title}`);
    });
  }
}
