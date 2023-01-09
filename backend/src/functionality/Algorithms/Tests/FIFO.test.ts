import { FIFOcache } from "../Fifo";

describe("Testing FIFO", () => {
    test("FIFO - getElement from an empty cache", () => {
        const fifo = new FIFOcache<Number, Number>(3);
        expect(() => fifo.getElement(1)).toThrow('Please set cache before using get');
    });
    test("FIFO - setElement and getElement", () => {
        const fifo = new FIFOcache<Number, String>(3);
        expect(fifo.setElement(1, 'a')).toBe(1);
        expect(fifo.getElement(1)).toBe('a');
    });
    test("FIFO - getElement - key does not exist in cache", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        expect(() => fifo.getElement(2)).toThrow('Key does not exist in cache');
    });
    test("FIFO - setElement - same key twice in a row", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        fifo.setElement(1, 'b');
        expect(fifo.getElement(1)).toBe('b');
    });
    test("FIFO - setElement - same key twice in a row followed by removing and getting", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        fifo.setElement(1, 'b');
        fifo.removeElement(1);
        expect(() => fifo.getElement(1)).toThrow('Key does not exist in cache');
        expect(() => fifo.removeElement(1)).toThrow('Key does not exist in cache');
    });
    test("FIFO - removeElement - single item in cache", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        expect(fifo.removeElement(1)).toBe(true);
    });
    test("FIFO - removeElement - from none existing list/empty cache", () => {
        const fifo = new FIFOcache<Number, String>(3);
        expect(() => fifo.removeElement(1)).toThrow('Please set cache before using remove');
    });
    test("FIFO - removeElement - twice in a row", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        fifo.removeElement(1);
        expect(() => fifo.removeElement(1)).toThrow('Cache is empty');
    });
    test("FIFO - removeElement - from the head", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        fifo.setElement(2, 'b');
        fifo.setElement(3, 'c');
        expect(fifo.removeElement(1)).toBe(true);
    });
    test("FIFO - removeElement - from the tail", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        fifo.setElement(2, 'b');
        fifo.setElement(3, 'c');
        expect(fifo.removeElement(3)).toBe(true);
    });
    test("FIFO - removeElement - from the middle", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        fifo.setElement(2, 'b');
        fifo.setElement(3, 'c');
        expect(fifo.removeElement(2)).toBe(true);
    });
    test("FIFO - setElement - max capacity head algo removal", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        fifo.setElement(2, 'b');
        fifo.setElement(3, 'c');
        fifo.setElement(4, 'd');
        expect(() => fifo.getElement(1)).toThrow('Key does not exist in cache');
    });

    test("FIFO - setElement - max capacity -> removeElement", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        fifo.setElement(2, 'b');
        fifo.setElement(3, 'c');
        fifo.setElement(4, 'd');
        expect(fifo.removeElement(2)).toBe(true);
    });

    test("FIFO - setElement - max capacity -> removeElement -> getElement", () => {
        const fifo = new FIFOcache<Number, String>(3);
        fifo.setElement(1, 'a');
        fifo.setElement(2, 'b');
        fifo.setElement(3, 'c');
        fifo.setElement(4, 'd');
        fifo.removeElement(2);
        expect(fifo.getElement(3)).toBe('c');
    });


});