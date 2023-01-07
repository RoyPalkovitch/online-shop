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