import { LRUCache } from "../LRU";

describe("Testing lru", () => {

  test("lru - getElement from an empty cache", () => {
    const lru = new LRUCache<Number, Number>(3);
    expect(() => lru.getElement(1)).toThrow('Please set cache before using get');
  });
  test("lru - setElement and getElement", () => {
    const lru = new LRUCache<Number, String>(3);
    expect(lru.setElement(1, 'a')).toBe(1);
    expect(lru.getElement(1)).toBe('a');
  });
  test("lru - getElement - key does not exist in cache", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    expect(() => lru.getElement(2)).toThrow('item is not in the list');
  });
  test("lru - setElement - same key twice in a row", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    lru.setElement(1, 'b');
    expect(lru.getElement(1)).toBe('b');
  });
  test("lru - setElement - same key twice in a row followed by removing and getting", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    lru.setElement(1, 'b');
    lru.removeElement(1);
    expect(() => lru.getElement(1)).toThrow('item is not in the list');
    expect(() => lru.removeElement(1)).toThrow('Key does not exist in cache');
  });
  test("lru - removeElement - single item in cache", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    expect(lru.removeElement(1)).toBe(true);
  });
  test("lru - removeElement - from none existing list/empty cache", () => {
    const lru = new LRUCache<Number, String>(3);
    expect(() => lru.removeElement(1)).toThrow('Please set cache before using remove');
  });
  test("lru - removeElement - twice in a row", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    lru.removeElement(1);
    expect(() => lru.removeElement(1)).toThrow('Key does not exist in cache');
  });
  test("lru - removeElement - from the head", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    expect(lru.removeElement(1)).toBe(true);
  });
  test("lru - removeElement - from the tail", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    expect(lru.removeElement(3)).toBe(true);
  });
  test("lru - removeElement - from the middle", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    expect(lru.removeElement(2)).toBe(true);
  });
  test("lru - setElement - max capacity head algo removal", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    lru.setElement(4, 'd');
    expect(() => lru.getElement(1)).toThrow('item is not in the list');
  });

  test("lru - setElement - max capacity -> removeElement", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    lru.setElement(4, 'd');
    expect(lru.removeElement(2)).toBe(true);
  });

  test("lru - setElement - max capacity -> removeElement -> getElement", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    lru.setElement(4, 'd');
    lru.removeElement(2);
    expect(lru.getElement(3)).toBe('c');
  });

  test("lru - setElement - getElement - max capacity -> setElement -> getElement", () => {
    const lru = new LRUCache<Number, String>(3);
    lru.setElement(1, 'a');
    lru.setElement(2, 'b');
    lru.setElement(3, 'c');
    lru.getElement(1);
    lru.setElement(4, 'd');
    expect(() => lru.getElement(2)).toThrow('item is not in the list');
  });


});