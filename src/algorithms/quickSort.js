import swap from "../helpers/swap";

let start =0

const quickSort = (list) => {
    start = 0;
    sort(list, 0 , list.length - 1);

    return start;
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
        start++;
    } 

    swap(list, i, high);  
    return i;
} 

export default quickSort;