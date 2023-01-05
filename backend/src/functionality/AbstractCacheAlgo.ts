import { ICacheAlgo } from "./ICacheAlgo";
import { LinkedList } from "./LinkedList/LinkedList";
import { LinkedNode } from "./LinkedList/Node";

abstract class AbstractCacheAlgo<K, V> implements ICacheAlgo<K, V>{

  private linkedList: LinkedList<K, V>;
  private maxCapacity: number;
  constructor(maxCap: number) {
    this.maxCapacity = maxCap;
  }

  getElement(key: K): V {
    return this.linkedList.getLinkedNode(key).data;
  }

  //might change to void
  abstract setElement(key: K, value: V): K;

  removeElement(key: K): boolean {
    const nodeToRemove = this.linkedList.getLinkedNode(key);
    return this.linkedList.removeLinkedNode(nodeToRemove)
  }

}