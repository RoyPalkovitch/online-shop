import { AbstractCacheAlgo } from "functionality/AbstractCacheAlgo";
import { ICacheAlgo } from "functionality/ICacheAlgo";
import { LinkedList } from "functionality/LinkedList/LinkedList";
import { LinkedNode } from "functionality/LinkedList/Node";


export class FIFOcache<K,V> extends AbstractCacheAlgo<K,V> implements ICacheAlgo<K,V> {
   
    constructor(maxCapacity: number) {
        super(maxCapacity);
    }

    

    setElement(key: K, value: V): K {
        const node = new LinkedNode(key, value);

        if (!this.linkedList) {
            this.linkedList = new LinkedList(node);
            return key;
        }

        if (this.maxCapacity >= this.linkedList.length) {
            this.linkedList.addLinkedNode(node);
            return key;
        }
        else {
            const head = this.linkedList.getHead();
            this.removeElement(head.key);
            this.linkedList.addLinkedNode(node);
            return key;
        }

    }
        
    
    
}