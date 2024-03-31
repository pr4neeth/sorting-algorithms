import swap from "../helpers/swap";

const selectionSort = (list) => {

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
        }

        if(i !== min)
        {
            swap(list, i, min);
        }
    }

}

export default selectionSort;