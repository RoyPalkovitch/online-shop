import { LinkedList } from "./LinkedList";

export class LinkedNode<K, V> {
  next: LinkedNode<K, V> | null;
  prev: LinkedNode<K, V> | null;
  parentRef: LinkedList<K, V>;
  key: K;
  data: V;
  constructor(key: K, data: V) {
    this.next = null;
    this.prev = null;
    this.parentRef = null;
    this.data = data;
    this.key = key;
  }
}