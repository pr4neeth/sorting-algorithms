import swap from "../helpers/swap";

let start = 0;

const selectionSort = (list) => {

    start = 0;

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
            start++;
        }

        if(i !== min)
        {
            swap(list, i, min);
        }
    }


    return start;

}

export default selectionSort;