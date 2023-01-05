import { LinkedNode } from "./Node";


export class LinkedList {
  private head: LinkedNode;
  private tail: LinkedNode;
  length: number;
  constructor(head: LinkedNode) {
    this.head = head;
    this.tail = head;
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
    linkedNode.prev = this.tail;
    this.tail.next = linkedNode;
    this.tail = linkedNode;
    this.length++;
  }

  removeLinkedNode(linkedNode: LinkedNode): boolean {
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

    let tempHead = this.head;

    while (tempHead.next !== linkedNode || tempHead === null) {
      tempHead = tempHead.next;
    }

    if (tempHead === null) {
      return false;
    }

    tempHead.next = tempHead.next.next
    tempHead.next.prev = tempHead;
    this.length--;
  }

}

