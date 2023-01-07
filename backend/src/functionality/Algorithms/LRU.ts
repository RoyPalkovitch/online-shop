import { AbstractCacheAlgo } from "../AbstractCacheAlgo";
import { LinkedNode } from "../LinkedList/Node";

export class LRUCache<K, V> extends AbstractCacheAlgo<K, V>{
  constructor(maxCap: number) {
    super(maxCap);
  }
  maxCapLogic(): void {
    this.removeElement(this.linkedList.getTail().key);
  };

  pushToCorrectPlace(node: LinkedNode<K, V>): void {
    this.linkedList.addToHead(node);
  };



  getElement(key: K): V {
    if (!this.linkedList) {
      throw Error('Please set cache before using get');
    }
    const getNode = this.linkedList.getLinkedNode(key);

    if (getNode !== this.linkedList.getHead()) {
      this.linkedList.addToHead(getNode);
    }
    return getNode.data;
  };

}
