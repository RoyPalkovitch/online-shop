import { LinkedNode } from "../LinkedList/Node";
import { LinkedList } from "../LinkedList/LinkedList";
import { AbstractCacheAlgo } from "../AbstractCacheAlgo";

export class RandomCache<K, V> extends AbstractCacheAlgo<K, V>{
  setElement(key: K, value: V): K {
    const node = new LinkedNode(key, value);

    if (!this.linkedList) {
      this.linkedList = new LinkedList(node);
      return key;
    }

    if (this.maxCapacity < this.linkedList.length + 1) {
      const keys = Array.from(this.linkedList.nodesDict.keys())
      const rand = Math.floor(Math.random() * this.linkedList.length);
      const randKey = keys[rand];
      this.removeElement(randKey)
    }
    this.linkedList.addLinkedNode(node);
    return key;
  }
}