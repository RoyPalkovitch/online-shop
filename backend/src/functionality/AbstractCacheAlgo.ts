import { ICacheAlgo } from "./ICacheAlgo";
import { LinkedList } from "./LinkedList/LinkedList";

export abstract class AbstractCacheAlgo<K, V> implements ICacheAlgo<K, V>{

  protected linkedList: LinkedList<K, V>;
  protected maxCapacity: number;
  constructor(maxCap: number) {
    this.maxCapacity = maxCap;
  }

  getElement(key: K): V {
    if (!this.linkedList) {
      throw Error('Please set cache before using get');
    }
    return this.linkedList.getLinkedNode(key).data;
  }

  //might change to void
  abstract setElement(key: K, value: V): K;

  removeElement(key: K): boolean {
    if (!this.linkedList) {
      throw Error('Please set cache before using remove');
    }
    const nodeToRemove = this.linkedList.getLinkedNode(key);
    return this.linkedList.removeLinkedNode(nodeToRemove)
  }

}