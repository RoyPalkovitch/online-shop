import { LinkedNode } from "../LinkedList/Node";
import { AbstractCacheAlgo } from "../AbstractCacheAlgo";

export class RandomCache<K, V> extends AbstractCacheAlgo<K, V>{

  pushToCorrectPlace(node: LinkedNode<K, V>): void {
    this.linkedList.addLinkedNode(node);
  }
  maxCapLogic() {
    const keys = this.linkedList.getKeys();
    const rand = Math.floor(Math.random() * this.linkedList.getLength());
    const randKey = keys[rand];
    super.removeElement(randKey)
  }
}