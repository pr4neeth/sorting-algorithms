const sortedArray = (size = 200) => {
    let initList = [];

    let i = 1;
    while(i<=size)
    {
        initList.push(i++);
    }

    return initList;
}

export default sortedArray;