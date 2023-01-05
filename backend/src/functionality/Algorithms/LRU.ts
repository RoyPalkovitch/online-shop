import { AbstractCacheAlgo } from "functionality/AbstractCacheAlgo";

export class LRUCache<K, V> extends AbstractCacheAlgo<K, V>{
  setElement(key: K, value: V): K {
    throw new Error("Method not implemented.");
  }

}