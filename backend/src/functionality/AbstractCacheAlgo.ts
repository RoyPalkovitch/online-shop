import { ICacheAlgo } from "./ICacheAlgo";
import { LinkedList } from "./LinkedList/LinkedList";
import { LinkedNode } from "./LinkedList/Node";

export abstract class AbstractCacheAlgo<K, V> implements ICacheAlgo<K, V>{

  protected linkedList: LinkedList<K, V>;
  protected maxCapacity: number;
  protected abstract maxCapLogic(): void;
  protected abstract pushToCorrectPlace(node: LinkedNode<K, V>): void;

  constructor(maxCap: number) {
    this.maxCapacity = maxCap;
  }

  getElement(key: K): V {
    if (!this.linkedList) {
      throw Error('Please set cache before using get');
    }
    return this.linkedList.getLinkedNode(key).data;
  }

  setElement(key: K, value: V): K {
    const node = new LinkedNode(key, value);
    if (!this.linkedList) {
      this.linkedList = new LinkedList(node);
      return key;
    }
    if (this.maxCapacity < this.linkedList.getLength() + 1) {
      this.maxCapLogic();
    }
    this.pushToCorrectPlace(node);
    return key;
  }

  removeElement(key: K): boolean {
    if (!this.linkedList) {
      throw Error('Please set cache before using remove');
    }

    const nodeToRemove = this.linkedList.getLinkedNode(key);
    return this.linkedList.removeLinkedNode(nodeToRemove)
  }
}