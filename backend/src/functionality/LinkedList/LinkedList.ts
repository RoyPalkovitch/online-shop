import { LinkedNode } from "./Node";


export class LinkedList<K, V> {
  private head: LinkedNode<K, V>;
  private tail: LinkedNode<K, V>;
  private nodesDict = new Map<K, LinkedNode<K, V>>();
  private length: number;
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

  getKeys(): K[] {
    return Array.from(this.nodesDict.keys());
  }

  getTail(): LinkedNode<K, V> {
    if (this.length === 0) {
      throw Error('list got not tail');
    }
    return this.tail;
  }

  getLinkedNode(key: K): LinkedNode<K, V> {
    if (this.length === 0) {
      throw Error('Cache is empty');
    }
    const getNode = this.nodesDict.get(key);
    if (!getNode) {
      throw Error('Key does not exist in cache');
    }
    return getNode
  }

  getLength(): number {
    return this.length;
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
    if (!this.nodesDict.has(linkedNode.key)) {
      throw Error('Key does not exist in cache');
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
