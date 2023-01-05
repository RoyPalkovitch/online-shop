import { ICacheAlgo } from "./ICacheAlgo";

abstract class AbstractCacheAlgo<K, V> implements ICacheAlgo<K, V>{

  getElement(key: K): V {
    throw new Error("Method not implemented.");
  }
  setElement(key: K, value: V): K {
    throw new Error("Method not implemented.");
  }
  removeElement(key: K): boolean {
    throw new Error("Method not implemented.");
  }

}