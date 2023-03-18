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
list.size

console.log(list);
console.log(list.head());
console.log(list.tail());