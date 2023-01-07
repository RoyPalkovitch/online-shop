import { LinkedNode } from "../LinkedList/Node";
import { AbstractCacheAlgo } from "../AbstractCacheAlgo";

export class RandomCache<K, V> extends AbstractCacheAlgo<K, V>{
  setElement(key: K, value: V): K {
    super.setElement(key, value);
    return key;
  }
  pushToCorrectPlace(node: LinkedNode<K, V>): void {
    this.linkedList.addLinkedNode(node);
  }
  maxCapLogic() {
    const keys = Array.from(this.linkedList.nodesDict.keys())
    const rand = Math.floor(Math.random() * this.linkedList.length);
    const randKey = keys[rand];
    this.removeElement(randKey)
  }
}