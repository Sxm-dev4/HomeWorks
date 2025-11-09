import { Node } from '../classes/Node';
import { NaryTree } from '../classes/NaryTree';

export function buildTreeFromData(data) {
  const tree = new NaryTree(data);
  
  function addChildren(parentNode, children) {
    children.forEach(childData => {
      const childNode = new Node(childData);
      parentNode.addChild(childNode);
      if (childData.children && childData.children.length > 0) {
        addChildren(childNode, childData.children);
      }
    });
  }
  
  if (data.children && data.children.length > 0) {
    addChildren(tree.root, data.children);
  }
  
  return tree;
}
