export class LinkedNode {
  next: LinkedNode | null;
  prev: LinkedNode | null;
  data: unknown;
  constructor(next: LinkedNode | null = null, prev: LinkedNode | null = null, data: unknown) {
    this.next = next;
    this.prev = prev;
    this.data = data;
  }
}