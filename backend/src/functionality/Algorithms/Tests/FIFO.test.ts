import { FIFOcache } from "../Fifo";

describe("FIFO", () => {
    test("FIFO", () => {
        const fifo = new FIFOcache(3);
        fifo.setElement(1, 1);
        expect(() => fifo.getElement(5)).toThrow('items is not in the list');

    });
});