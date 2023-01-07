import { AbstractCacheAlgo } from "../AbstractCacheAlgo";
import { LinkedList } from "../LinkedList/LinkedList";
import { LinkedNode } from "../LinkedList/Node";

export class LRUCache<K, V> extends AbstractCacheAlgo<K, V>{
  constructor(maxCap: number) {
    super(maxCap);
  }

  setElement(key: K, value: V): K {
    const newNode = new LinkedNode(key, value);
    if (!this.linkedList) {
      this.linkedList = new LinkedList(newNode);
      return key
    }

    this.linkedList.addToHead(newNode);

    if (this.maxCapacity < this.linkedList.length) {
      this.removeElement(this.linkedList.getTail().key);
    }

    return key
  }

  getElement(key: K): V {
    if (!this.linkedList) {
      throw Error('Please set cache before using get');
    }
    const getNode = this.linkedList.getLinkedNode(key);
    if (!getNode) {
      return;
    }
    if (getNode !== this.linkedList.getHead()) {
      this.linkedList.addToHead(getNode);
    }
    return getNode.data;
  }

}
