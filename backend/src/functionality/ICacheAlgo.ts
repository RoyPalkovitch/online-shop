export interface ICacheAlgo<K, V> {
  getElement(key: K): V;
  setElement(key: K, value: V): K;
  removeElement(key: K): boolean;
}