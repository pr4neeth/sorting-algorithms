import swap from "../helpers/swap";

const selectionSort = (list) => {

    const len = list.length;

    const start = performance.now();

    let i,j,min;
    
    for(i = 0; i<len ; i++)
    {
        min = i;

        for(j = i+1; j<len ; j++)
        {
            if(list[j] < list[min]){
                min = j;
            }
        }

        if(i !== min)
        {
            swap(list, i, min);
        }
    }

    const end = performance.now();

    return end - start;

}

export default selectionSort;