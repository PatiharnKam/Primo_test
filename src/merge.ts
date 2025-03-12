export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let MixArrays: number[] = [];
    MixArrays = MixArrays.concat(collection_1, collection_2, collection_3);

    return mergeSort(MixArrays);
}

function mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }
    let a ;
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return mergeArray(mergeSort(left), mergeSort(right));
}

function mergeArray(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i), right.slice(j));
}