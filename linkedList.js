class LinkedList {
  constructor() { 
    this.Head = null;
  }
  append(value) {
    if(this.Head === null) {
      this.Head = new Node(value)
    } else {
      let node = new Node(value)
      let tmp = this.Head
      while (tmp.nextNode != null) {
      tmp = tmp.nextNode
      }
      tmp.nextNode = node 
    }
  }
  prepend(value) {
    if(this.Head === null) this.Head = new Node(value)
    this.Head = new Node(value, this.Head);
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

console.log(list);