const insertionSort = (list) => {

    const len = list.length;

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
    
}

export default insertionSort;