class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
    return this;
  }

  peek(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    
    return current;
  }

  size() {
    return this.length;
  }
  
  remove(index){
    if (index < 0 || index >= this.length) {
        return null;
  }
  let removedNode;

  if (index === 0){
    removedNode = this.head;
    this.head = this.head.next;
    if (this.length === 1){
        this.tail = null;
    }
  } else {
    let previous = this.peek(index - 1);
    removedNode = previous.next;
    previous.next = removedNode.next;
    if (index === this.length - 1){
        this.tail = previous;
    }
  }
    this.length--;
    return removedNode;
}
print(){
    const values = [];
    let current = this.head;

    while (current){
        values.push(current.value);
        current = current.next;
    }
    return values;
}

getCurrent(){
    return this.head;
}

next(){
    if (this.head && this.head.next){
        this.head = this.head.next;
        return true;
    }
    return false;
}
reset(){
    if (this.length === 0){
        let current = this.head;
        while (current.next){
            current = current.next;
        }
        current = this.peek(0);
        this.head = current;
    }
}
}