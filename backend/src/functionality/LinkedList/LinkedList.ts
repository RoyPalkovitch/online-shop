import { LinkedNode } from "./Node";


export class LinkedList {
  head: LinkedNode;
  tail: LinkedNode;
  constructor(head: LinkedNode) {
    this.head = head;
    this.tail = head;

  }
  getLength() {
    let tempHead = this.head;
    let counter = 1;
    while (tempHead !== null) {
      tempHead = tempHead.next;
      counter++;
    }
    return counter;
  }

  setTail() {
    let tempHead = this.head;
    while (tempHead.next !== null) {
      tempHead = tempHead.next;
    }
    this.tail = tempHead;
  }

  addLinkedNode(linkedNode: LinkedNode) {
    let tempHead = this.head;
    while (tempHead.next !== null) {
      tempHead = tempHead.next;
    }
    linkedNode.prev = tempHead;
    tempHead.next = linkedNode;
    this.setTail();
  }

  removeLinkedNode(linkedNode: LinkedNode) {
    if (linkedNode === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }

    if (this.tail === linkedNode) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    }

    let tempHead = this.head;
    while (tempHead.next != linkedNode) {
      tempHead = tempHead.next;
    }
    tempHead.next = tempHead.next.next
    tempHead.next.prev = tempHead;
  }

}

