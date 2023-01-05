import { LinkedNode } from "./Node";


export class LinkedList {
  private head: LinkedNode;
  private tail: LinkedNode;
  length: number;
  constructor(head: LinkedNode) {
    this.head = head;
    this.tail = head;
    head.parentRef = this;
  }

  getHead(): LinkedNode {
    return this.head;
  }

  getTail(): LinkedNode {
    return this.tail;
  }

  setHead(linkedNode: LinkedNode): void {
    linkedNode.next = this.head;
    this.head.prev = linkedNode;
    this.head = linkedNode;
    this.length++;
  }


  addLinkedNode(linkedNode: LinkedNode): void {
    linkedNode.parentRef = this;
    linkedNode.prev = this.tail;
    this.tail.next = linkedNode;
    this.tail = linkedNode;
    this.length++;
  }

  removeLinkedNode(linkedNode: LinkedNode): void {
    if (linkedNode.parentRef !== this) {
      return;
    }

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
    linkedNode.prev = linkedNode.next;
    this.length--;
    return;


  }

}

