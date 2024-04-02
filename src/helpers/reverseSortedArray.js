const reverseSortedArray = (size = 200) => {
    let initList = [];

    let i = size;
    while(i>0)
    {
        initList.push(i--);
    }

    return initList;
}

export default reverseSortedArray;