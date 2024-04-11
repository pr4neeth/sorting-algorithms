import swap from "../helpers/swap";
let itr = 0;

const heapSort = (list) => {
    const start = performance.now();

    itr = 0;

    const len = list.length;

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--){
        heapify(list, len, i);

    }

    for (let i = len - 1; i > 0; i--) {
        swap(list, 0, i);
        heapify(list, i, 0);
    }

    const end = performance.now();

    return{
        iterations: itr,
        time: end - start
    };
}

const heapify = (list, len, i) => {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    itr++;

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