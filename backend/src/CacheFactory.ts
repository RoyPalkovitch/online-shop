import { User } from "dao/User";
import { AbstractCacheAlgo } from "functionality/AbstractCacheAlgo";
import { FIFOcache } from "functionality/Algorithms/Fifo";
import { LRUCache } from "functionality/Algorithms/LRU";
import { RandomCache } from "functionality/Algorithms/Random";


abstract class CacheCreator<K, V>{

  public abstract createCache(capacity: number): AbstractCacheAlgo<K, V>

}

class FifoCacheCreator<K, V> extends CacheCreator<K, V> {
  public createCache(capacity: number) {
    return new FIFOcache<K, V>(capacity)
  }
}

class RandomCacheCreator<K, V> extends CacheCreator<K, V> {
  public createCache(capacity: number) {
    return new RandomCache<K, V>(capacity)
  }
}

class LRUCacheCreator<K, V> extends CacheCreator<K, V> {
  public createCache(capacity: number) {
    return new LRUCache<K, V>(capacity)
  }
}

export function ClientCode(clientString: string, capacity: number) {
  if (clientString === 'random') {
    return new RandomCache<number, User>(capacity);
  } else if (clientString === 'fifo') {
    return new FIFOcache<number, User>(capacity);
  } else if (clientString === 'lru') {
    return new LRUCache<number, User>(capacity);
  } else {
    throw ("Can't find cache type");
  }
}



