"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    let MixArrays = [];
    MixArrays = MixArrays.concat(collection_1, collection_2, collection_3);
    return mergeSort(MixArrays);
}
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return mergeArrays(mergeSort(left), mergeSort(right));
}
function mergeArrays(left, right) {
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i), right.slice(j));
}
