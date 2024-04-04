import swap from "../helpers/swap";
let start = 0;

const heapSort = (list) => {
    const len = list.length;

    start = 0;

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--){
        heapify(list, len, i);

    }

    for (let i = len - 1; i > 0; i--) {
        swap(list, 0, i);
        heapify(list, i, 0);
    }


    return start;
}

const heapify = (list, len, i) => {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    start++;

    if (l < len && list[l] > list[largest])
        largest = l;

    if (r < len && list[r] > list[largest])
        largest = r;

    if (largest !== i) {
        swap(list, i, largest)
        heapify(list, len, largest);
    }
}

export default heapSort;