const merge = (a, b) => {
    let c = [];

    var i = 0,j = 0,k = 0;

    while(i<a.length && j<b.length){
        if(a[i] > b[j]){
            c[k++] = b[j++];
        }
        else{
            c[k++] = a[i++];
        }
    }

    while(i<a.length){
        c[k++] = a[i++];
    }

    while(j<b.length){
        c[k++] = b[j++];
    }

    return c;
}

const mergeSort = (list) => {

    const start = performance.now();

    const result = sort(list);

    const end = performance.now();

    return {
        time: end - start,
        sortedList: result
    }
    
}
const sort = (list) => {
    const len = list.length;
    if(len === 1)
    {
        return list;
    }
    let l1 = list.slice(0,len/2);
    let l2 = list.slice(len/2);

    l1 = sort(l1);
    l2 = sort(l2);

    return merge(l1, l2);
}
export default mergeSort;