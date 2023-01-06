import { link } from "fs";
import { LinkedNode } from "./Node";


export class LinkedList<K, V> {
  private head: LinkedNode<K, V>;
  private tail: LinkedNode<K, V>;
  nodesDict = new Map<K, LinkedNode<K, V>>();
  length: number;

  constructor(head: LinkedNode<K, V>) {
    this.head = head;
    this.tail = head;
    this.length = 1;
    head.parentRef = this;
    this.nodesDict.set(head.key, head);
  }

  getHead(): LinkedNode<K, V> {
    if (this.length === 0) {
      throw Error('list got not head');
    }
    return this.head;
  }

  getTail(): LinkedNode<K, V> {
    if (this.length === 0) {
      throw Error('list got not tail');
    }
    return this.tail;
  }

  getLinkedNode(key: K): LinkedNode<K, V> {
    if (this.length === 0) {
      throw Error('list got not items');
    }
    const getNode = this.nodesDict.get(key);
    if (!getNode) {
      throw Error('items is not in the list');
    }
    return getNode
  }

  addToHead(linkedNode: LinkedNode<K, V>): void {

    if (linkedNode.parentRef && linkedNode.parentRef !== this) {
      throw Error('item is in another list');
    }
    else if (linkedNode.parentRef === this) {
      this.removeLinkedNode(linkedNode);
    } else {
      linkedNode.parentRef = this;
    }

    this.length++;
    linkedNode.next = this.head;
    this.head.prev = linkedNode;
    this.head = linkedNode;

    this.nodesDict.set(linkedNode.key, linkedNode);
  }

  addLinkedNode(linkedNode: LinkedNode<K, V>): void {
    linkedNode.parentRef = this;
    linkedNode.prev = this.tail;
    this.tail.next = linkedNode;
    this.tail = linkedNode;
    this.length++;
    this.nodesDict.set(linkedNode.key, linkedNode);
  }

  removeLinkedNode(linkedNode: LinkedNode<K, V>): boolean {

    if (this.length === 0) {
      throw Error('no more nodes to remove');
    }
    if (linkedNode.parentRef !== this) {
      return false;
    }

    this.nodesDict.delete(linkedNode.key);
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return true;
    }

    if (linkedNode === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return true;
    }

    if (this.tail === linkedNode) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return true;
    }
    linkedNode.prev.next = linkedNode.next;
    linkedNode.next.prev = linkedNode.prev;

    this.length--;
    return true;

  }

}


// const node_1 = new LinkedNode<number, number>(1, 10);
// const node_2 = new LinkedNode<number, number>(2, 11);
// const node_3 = new LinkedNode<number, number>(3, 12);
// const node_4 = new LinkedNode<number, number>(4, 13);
// const node_5 = new LinkedNode<number, number>(5, 14);
// const node_6 = new LinkedNode<number, number>(6, 17);

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
// console.log(linked.removeLinkedNode(node_3));
// console.log(linked.getHead().key);
// console.log('-----------------------');
// console.log(linked.removeLinkedNode(node_6));
// console.log(linked.getHead().key);
// console.log('-----------------------');
// console.log(linked.removeLinkedNode(node_1));
// console.log(linked.getHead().key);
// console.log('-----------------------');
// console.log(linked.removeLinkedNode(node_5));
// console.log(linked.getHead().key);
// console.log('-----------------------');
// console.log(linked.removeLinkedNode(node_2));
// console.log(linked.getHead().key);
// console.log('-----------------------');
// console.log(linked.removeLinkedNode(node_4));
// console.log(linked.length);
//console.log(linked.getHead().key);

// counter = 1;
// while (linked.getLinkedNode(counter)) {
//   console.log(linked.getLinkedNode(counter).data);
//   counter++;
// }


