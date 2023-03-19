class LinkedList {
  constructor() { 
    this.Head = null;
    this.size = 0;
  }
  append(value) {
    if(this.Head === null) {
      this.Head = new Node(value)
      this.size += 1;
    } else {
      let node = new Node(value)
      let tmp = this.Head
      while (tmp.nextNode != null) {
      tmp = tmp.nextNode
      }
      tmp.nextNode = node 
      this.size += 1;
    }
  }
  prepend(value) {
    if(this.Head === null) this.Head = new Node(value)
    this.Head = new Node(value, this.Head);
    this.size += 1;
  }
  size(){
    return this.size;
  }
  head() {
    return this.Head;
  }
  tail() {
    let tile = this.Head.nextNode;
    while (tile.nextNode != null) {
      tile = tile.nextNode;
    }
    return tile;
  }
  at(index) {
    let cont = 0;
    let node = this.Head;
    if(node == null) return 0
    while (cont != index) {
      node = node.nextNode;
      cont += 1;
    }
    return node;
  }
  pop() {
    if(this.Head == null) return 'Cannot delete';
    let current = this.Head;
    let previous = null
    while(current.nextNode != null){
      previous = current;
      current = current.nextNode;
    }
    
    if(current == null) return 'Cannot delete';
    // Delete current node
    
    previous.nextNode = null
    this.size--
  }
  contains(value) {
    if(this.Head == null) return 'The Head is empty';
    let current = this.Head;
    let result = false;
    while (current != null) {
      if(current.value == value){
        result = true;
      }
      current = current.nextNode;
    }
    return result;
  }
  find(value) {
    let cont = 0;
    let node = this.Head;
    if(node == null) return null
    while (node.value != value) {
      node = node.nextNode;
      if(node == null) return null
      cont += 1;
    }
    return cont;
  }
  toString(){
    if(this.Head == null)return 'The HEAD is empty'
    let node = this.Head;
    let string = '';
    while(node != null) {
      if(node.nextNode == null) {
        string += `(${node.value})`
      } else {
        string += `(${node.value}) => `
      }
      node = node.nextNode;
    }
    return string;
  }
}


class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList()
list.append(2)
list.append(3)
list.append(4)
list.prepend(5)
list.prepend(6)

list.pop()
list
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(4));
console.log(list);
console.log(list.contains(2));
console.log(list.find(2));
console.log(list.toString());