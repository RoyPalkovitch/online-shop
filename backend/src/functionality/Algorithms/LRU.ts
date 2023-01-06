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




// const lruCache = new LRUCache<number, number>(3);
// console.log(lruCache.setElement(1, 11));
// console.log('-----------------------');
// console.log(lruCache.setElement(2, 12));
// console.log('-----------------------');
// console.log(lruCache.setElement(3, 13));
// console.log(lruCache.getElement(3));
// console.log('-----------------------');

// let counter = 1;
// try {
//   while (lruCache.getElement(counter)) {
//     console.log(lruCache.getElement(counter));
//     counter++;
//   }
// }
// catch {

// }
// console.log('-----------------------');
// console.log(lruCache.setElement(4, 14));
// console.log('-----------------------');
// console.log(lruCache.setElement(5, 15));
// console.log('-----------------------');
// console.log(lruCache.setElement(6, 16));
// //console.log(lruCache.getElement(3));
// console.log('-----------------------');


// while (lruCache.getElement(counter)) {
//   console.log(lruCache.getElement(counter));
//   counter++;
// }
// // lruCache.setElement(4, 13);


// // while (lruCache.getElement(counter)) {
// //   console.log(lruCache.getElement(counter));
// //   counter++;
// // }
// console.log('-----------------------');
