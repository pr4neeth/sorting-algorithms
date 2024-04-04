import swap from "../helpers/swap";

let start = 0;

const threeWayQuickSort = (list) => {
    start = 0;
    sort(list, 0, list.length - 1);

    return start;
}

const sort = (list, left , right) => {
    if (left >= right){
        return;
    }
    let pivotIndex = getPivotIndex(list, left, right);
    let partitionIndex = partition(list, left, right, pivotIndex);
  
    sort(list, left, partitionIndex - 1);
    sort(list, partitionIndex + 1, right);
}
  
const getPivotIndex = (list, left, right) => {
    const first = list[left];
    const last = list[right];
    const middleIndex = Math.floor((left + right) / 2);
    const middle = list[middleIndex];
  
    const med = median(first, last, middle);
  
    if (med === first) {
      return left;
    } else if (med === middle) {
      return middleIndex;
    } else {
      return right;
    }
}
  
const partition = (list, left, right, pivotIndex) => {
    let pivotValue = list[pivotIndex];
    swap(list, pivotIndex, right);
    let storeIndex = left;
  
    for (let i = left; i < right; i++) {
      if (list[i] < pivotValue) {
        swap(list, i, storeIndex);
        storeIndex++;
      }
      start++;
    }
  
    swap(list, storeIndex, right);
    return storeIndex;
}

const median = (a,b,c) => {
    if((a<=b && b<=c) || (a>=b && b>=c))
        return b;
    else if((a<=c && c<=b) || (a>=c && c>=b))
        return c;
    else
        return a;
}

export default threeWayQuickSort;

  