import swap from "../helpers/swap";
let start = 0;

const bubbleSort = (list) => {

    start = 0;

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
            start++;
        }

        if(!swapped){
            break;
        }
    }


    return start;
    
}

export default bubbleSort;