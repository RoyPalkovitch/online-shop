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



// const randomCache = new RandomCache<number, number>(3);
// console.log(randomCache.setElement(1, 11));
// console.log('-----------------------');
// console.log(randomCache.setElement(2, 12));
// console.log('-----------------------');
// console.log(randomCache.setElement(3, 13));
// console.log(randomCache.getElement(3));
// console.log('-----------------------');
// let counter = 1;
// try {
//   while (randomCache.getElement(counter)) {
//     console.log(randomCache.getElement(counter));
//     counter++;
//   }
// }
// catch {

// }
// let head = randomCache.linkedList.getHead();

// console.log('-----------------------');
// randomCache.setElement(4, 14);
// while (head) {
//   console.log(head.key);
//   head = head.next;
// }
// console.log('-----------------------');
// console.log(randomCache.setElement(5, 15));
// console.log('-----------------------');
// console.log(randomCache.setElement(6, 16));
