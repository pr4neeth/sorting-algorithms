import swap from "../helpers/swap";

const bubbleSort = (list) => {

    const start = performance.now();

    const len = list.length;

    let i,j;
    let swapped;
    
    for(i = len-1; i>1 ; i--)
    {

        for(j = len-1; j > len-1-i; j--)
        {
            if(list[j-1] > list[j])
            {
                swap(list, j-1, j);
                swapped = true;
            }
        }

        if(!swapped){
            break;
        }
    }

    const end = performance.now();

    return end-start;
    
}

export default bubbleSort;