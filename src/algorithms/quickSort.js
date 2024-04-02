import swap from "../helpers/swap";

const quickSort = (list) => {
    const start = performance.now();
    sort(list, 0 , list.length - 1);
    const end = performance.now();

    return end-start;
}

const sort = (list, low, high) => { 
    if (low >= high) return; 
    let pi = partition(list, low, high); 
  
    sort(list, low, pi - 1); 
    sort(list, pi + 1, high); 
}

const partition = (list, low, high) => { 
    let pivot = list[high]; 
    let i = low; 
  
    for (let j = low; j < high; j++) { 

        if (list[j] < pivot) { 

            swap(list, i, j);  
            i++;
        } 
    } 

    swap(list, i, high);  
    return i;
} 

export default quickSort;