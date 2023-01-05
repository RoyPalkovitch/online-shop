import { LinkedList } from "./LinkedList";

export class LinkedNode {
  next: LinkedNode | null;
  prev: LinkedNode | null;
  parentRef: LinkedList;
  key: number;
  data: unknown;
  constructor(data: unknown) {
    this.next = null;
    this.prev = null;
    this.parentRef = null;
    this.data = data;
  }
}