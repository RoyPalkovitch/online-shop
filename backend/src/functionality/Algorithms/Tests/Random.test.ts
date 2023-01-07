import { RandomCache } from "../Random";

describe("Testing random", () => {

  test("random - getElement from an empty cache", () => {
    const random = new RandomCache<Number, Number>(3);
    expect(() => random.getElement(1)).toThrow('Please set cache before using get');
  });
  test("random - setElement and getElement", () => {
    const random = new RandomCache<Number, String>(3);
    expect(random.setElement(1, 'a')).toBe(1);
    expect(random.getElement(1)).toBe('a');
  });
  test("random - getElement - key does not exist in cache", () => {
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    expect(() => random.getElement(2)).toThrow('item is not in the list');
  });
  test("random - setElement - same key twice in a row", () => {
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    random.setElement(1, 'b');
    expect(random.getElement(1)).toBe('b');
  });
  test("random - setElement - same key twice in a row followed by removing and getting", () => {
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    random.setElement(1, 'b');
    random.removeElement(1);
    expect(() => random.getElement(1)).toThrow('item is not in the list');
    expect(() => random.removeElement(1)).toThrow('Key does not exist in cache');
  });
  test("random - removeElement - single item in cache", () => {
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    expect(random.removeElement(1)).toBe(true);
  });
  test("random - removeElement - from none existing list/empty cache", () => {
    const random = new RandomCache<Number, String>(3);
    expect(() => random.removeElement(1)).toThrow('Please set cache before using remove');
  });
  test("random - removeElement - twice in a row", () => {
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    random.removeElement(1);
    expect(() => random.removeElement(1)).toThrow('Key does not exist in cache');
  });
  test("random - removeElement - from the head", () => {
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    random.setElement(2, 'b');
    random.setElement(3, 'c');
    expect(random.removeElement(1)).toBe(true);
  });
  test("random - removeElement - from the tail", () => {
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    random.setElement(2, 'b');
    random.setElement(3, 'c');
    expect(random.removeElement(3)).toBe(true);
  });
  test("random - removeElement - from the middle", () => {
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    random.setElement(2, 'b');
    random.setElement(3, 'c');
    expect(random.removeElement(2)).toBe(true);
  });
  test("random - setElement - max capacity random algo removal", () => {
    global.Math.random = () => 0;
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    random.setElement(2, 'b');
    random.setElement(3, 'c');
    random.setElement(4, 'd');
    expect(() => random.getElement(1)).toThrow('item is not in the list');
  });

  test("random - setElement - max capacity -> removeElement -> getElement", () => {
    global.Math.random = () => 0;
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    random.setElement(2, 'b');
    random.setElement(3, 'c');
    random.setElement(4, 'd');
    expect(random.getElement(4)).toBe('d');
  });

  test("random - setElement - max capacity -> removeElement -> getElement", () => {
    Math.random = () => 0;
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    random.setElement(2, 'b');
    random.setElement(3, 'c');
    random.setElement(4, 'd');
    random.removeElement(2);
    expect(random.getElement(3)).toBe('c');
  });

  test("random - setElement - getElement - max capacity -> setElement -> getElement", () => {
    Math.random = () => 0;
    const random = new RandomCache<Number, String>(3);
    random.setElement(1, 'a');
    random.setElement(2, 'b');
    random.setElement(3, 'c');
    random.getElement(1);
    random.setElement(4, 'd');
    expect(() => random.getElement(1)).toThrow('item is not in the list');
  });
});