import { AbstractCacheAlgo } from "../AbstractCacheAlgo";
import { ICacheAlgo } from "../ICacheAlgo";
import { LinkedList } from "../LinkedList/LinkedList";
import { LinkedNode } from "../LinkedList/Node";


export class FIFOcache<K, V> extends AbstractCacheAlgo<K, V> implements ICacheAlgo<K, V> {

    constructor(maxCapacity: number) {
        super(maxCapacity);
    }

    setElement(key: K, value: V): K {
        const node = new LinkedNode(key, value);

        if (!this.linkedList) {
            this.linkedList = new LinkedList(node);
            return key;
        }

        this.linkedList.addLinkedNode(node);
        if (this.maxCapacity < this.linkedList.length) {
            const head = this.linkedList.getHead();
            this.removeElement(head.key);
        }
        return key;
    }
}



// const lruCache = new FIFOcache<number, number>(3);
// console.log(lruCache.setElement(1, 11));
// console.log('-----------------------');
// console.log(lruCache.setElement(2, 12));
// console.log('-----------------------');
// console.log(lruCache.setElement(3, 13));
// console.log(lruCache.getElement(3));
// console.log('-----------------------');
// let counter = 1;
// try {
//     while (lruCache.getElement(counter)) {
//         console.log(lruCache.getElement(counter));
//         counter++;
//     }
// }
// catch {

// }
// console.log('-----------------------');
// console.log(lruCache.setElement(4, 14));
// console.log('-----------------------');
// console.log(lruCache.setElement(5, 15));
// console.log('-----------------------');
// console.log(lruCache.setElement(6, 16));

// try {
//     while (lruCache.getElement(counter)) {
//         console.log(lruCache.getElement(counter));
//         counter++;
//     }
// }
// catch {

// }
