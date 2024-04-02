const insertionSort = (list) => {

    const len = list.length;

    const start = performance.now();

    let curr;
    let i,j;
    
    for(i = 1; i<len ; i++)
    {
        curr = list[i];

        for(j = i-1; j >= 0 && list[j] > curr ; j--)
        {
            list[j+1] = list[j];
        }

        list[j+1] = curr;
    }

    const end = performance.now();

    return end - start;
    
}

export default insertionSort;