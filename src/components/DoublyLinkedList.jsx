class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.current = null; 
  }

  append(value) {
    const newNode = new DoublyNode(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode;
    } else {
      newNode.previous = this.tail;
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
    
    let current;
    
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.previous;
      }
    }
    
    return current;
  }
  size (){
    return this.length;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let removedNode = this.peek(index);

    if (this.length === 1){
        this.head = null;
        this.tail = null;
        this.current = null;
    } else if (index === 0){
        this.head = removedNode.next;
        this.head.previous = null;
        if (this.current === removedNode){
            this.current = this.head;
        }
    } else if (index === this.length - 1){
        this.tail = removedNode.previous;
        this.tail.next = null;
        if (this.current === removedNode){
            this.current = this.tail;
        }
    } else {
        removedNode.previous.next = removedNode.next;
        removedNode.next.previous = removedNode.previous;
        if (this.current === removedNode){
            this.current = removedNode.next;
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
goPrevious(){
    if (this.current && this.current.previous){
        this.current = this.current.previous;
        return true;
    }
    return false;
}

getCurrentValue(){
    return this.current ? this.current.value : null;
}

getCurrentIndex(){
    if (!this.current) return -1;
    let index = 0;
    let node = this.head;

    while (node && node !== this.current){
        index++;
        node = node.next;
    }
    return index;
}

canGoNext(){
        return this.current && this.current.next !== null;
    }

canGoPrevious(){
        return this.current && this.current.previous !== null;
    }
}