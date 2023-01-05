import { link } from "fs";
import { LinkedNode } from "./Node";


export class LinkedList {
  private head: LinkedNode;
  private tail: LinkedNode;

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

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  setHead(linkedNode: LinkedNode) {
    linkedNode.next = this.head;
    this.head.prev = linkedNode;
    this.head = linkedNode;
  }


  addLinkedNode(linkedNode: LinkedNode) {
    linkedNode.prev = this.tail;
    this.tail.next = linkedNode;
    this.tail = linkedNode;
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

