import { LinkedNode } from "./Node";


export class LinkedList {
  private head: LinkedNode;
  private tail: LinkedNode;
  nodesDict: { [key: number]: LinkedNode } = {};
  length: number;
  constructor(head: LinkedNode) {
    this.head = head;
    this.tail = head;
    this.length = 1;
    head.parentRef = this;
    this.nodesDict[1] = head;
  }

  getHead(): LinkedNode {
    return this.head;
  }

  getTail(): LinkedNode {
    return this.tail;
  }

  getLinkedNode(key: number): LinkedNode {
    return this.nodesDict[key];
  }

  addToHead(linkedNode: LinkedNode): void {
    if (linkedNode.parentRef && linkedNode.parentRef !== this) {
      return;
    }
    if (linkedNode.parentRef === this) {
      const keyHolder = linkedNode.key;
      this.removeLinkedNode(linkedNode);
      linkedNode.key = keyHolder;
    }
    else {
      this.length++;
      linkedNode.key = this.length;
    }
    linkedNode.next = this.head;
    this.head.prev = linkedNode;
    this.head = linkedNode;

    this.nodesDict[linkedNode.key] = linkedNode;
  }

  addLinkedNode(linkedNode: LinkedNode): void {
    linkedNode.parentRef = this;
    linkedNode.prev = this.tail;
    this.tail.next = linkedNode;
    this.tail = linkedNode;
    this.length++;
    linkedNode.key = this.length;
    this.nodesDict[linkedNode.key] = linkedNode;
  }

  removeLinkedNode(linkedNode: LinkedNode): void {
    if (linkedNode.parentRef !== this) {
      console.log('failed');
      return;
    }

    this.nodesDict[linkedNode.key] = undefined;

    if (linkedNode === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return;
    }

    if (this.tail === linkedNode) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return;

    }

    const prev = linkedNode.prev;
    const next = linkedNode.next
    prev.next = next;
    next.prev = prev;
    this.length--;
    return;

  }

}


// const node_1 = new LinkedNode(10);
// const node_2 = new LinkedNode(11);
// const node_3 = new LinkedNode(12);
// const node_4 = new LinkedNode(13);
// const node_5 = new LinkedNode(14);
// const node_6 = new LinkedNode(17);

// const linked = new LinkedList(node_1);
// linked.addLinkedNode(node_2);
// linked.addLinkedNode(node_3);
// linked.addLinkedNode(node_4);
// linked.addLinkedNode(node_5);

// let counter = 1;
// while (linked.getLinkedNode(counter)) {
//   console.log(linked.getLinkedNode(counter).data);
//   counter++;
// }
// console.log('-----------------------');

// console.log(node_5.key);

// console.log('-----------------------');

// linked.addToHead(node_6);
// linked.addToHead(node_5);
// console.log(node_6.key);
// console.log(node_5.key);
// console.log('-----------------------');

// counter = 1;
// while (linked.getLinkedNode(counter)) {
//   console.log(linked.getLinkedNode(counter).data);
//   counter++;
// }


