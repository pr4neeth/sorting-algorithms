import swap from "../helpers/swap";

let itr = 0;

const selectionSort = (list) => {
    const start = performance.now();

    itr = 0;

    const len = list.length;
    
    let i,j,min;
    
    for(i = 0; i<len ; i++)
    {
        min = i;

        for(j = i+1; j<len ; j++)
        {
            if(list[j] < list[min]){
                min = j;
            }
            itr++;
        }

        if(i !== min)
        {
            swap(list, i, min);
        }
    }

    const end = performance.now();

    return {
        iterations: itr,
        time: end - start
    };

}

export default selectionSort;