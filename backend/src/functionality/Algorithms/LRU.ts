import { AbstractCacheAlgo } from "functionality/AbstractCacheAlgo";
import { LinkedList } from "functionality/LinkedList/LinkedList";
import { LinkedNode } from "functionality/LinkedList/Node";

export class LRUCache<K, V> extends AbstractCacheAlgo<K, V>{
  constructor(maxCap: number) {
    super(maxCap);
  }

  setElement(key: K, value: V): K {
    const newNode = new LinkedNode(key, value);
    if (this.maxCapacity === this.linkedList.length) {
      this.removeElement(this.linkedList.getTail().key);
    }

    if (!this.linkedList) {
      this.linkedList = new LinkedList(newNode);
    }
    else {

      this.linkedList.addToHead(newNode);
    }
    return key
  }

  getElement(key: K): V {
    if (!this.linkedList) {
      return;
    }
    const getNode = this.linkedList.getLinkedNode(key);
    if (!getNode) {
      return; // need to move this to LinkedList class
    }
    this.linkedList.removeLinkedNode(getNode);
    this.linkedList.addToHead(getNode);
    return getNode.data;
  }

}