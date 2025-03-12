"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
describe("Merge Function", () => {
    test("Merge and sort correctly", () => {
        const collection_1 = [1, 5, 7, 11];
        const collection_2 = [3, 4, 6, 9];
        const collection_3 = [12, 10, 8, 2];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
});
