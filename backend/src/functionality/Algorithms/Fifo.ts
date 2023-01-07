import { AbstractCacheAlgo } from "../AbstractCacheAlgo";
import { ICacheAlgo } from "../ICacheAlgo";
import { LinkedNode } from "../LinkedList/Node";


export class FIFOcache<K, V> extends AbstractCacheAlgo<K, V> implements ICacheAlgo<K, V> {

    maxCapLogic(): void {
        const head = this.linkedList.getHead();
        this.removeElement(head.key);
    };

    pushToCorrectPlace(node: LinkedNode<K, V>): void {
        this.linkedList.addLinkedNode(node);
    }

}