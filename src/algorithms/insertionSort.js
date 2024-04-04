let start = 0;

const insertionSort = (list) => {

    start = 0;
    
    const len = list.length;

    let curr;
    let i,j;
    
    for(i = 1; i<len ; i++)
    {
        curr = list[i];

        for(j = i-1; j >= 0  ; j--)
        {
            start++;
            if(list[j] > curr){
                list[j+1] = list[j];
            }
            else{
                break;
            }
        }

        list[j+1] = curr;
    }


    return start;
    
}

export default insertionSort;