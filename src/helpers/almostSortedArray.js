import swap from "./swap";

const almostSortedArray = (size = 200) => {
    let initList = [];

    initList.push(Math.floor(Math.random()*size) + 1);
    let i = 1;
    while(i<size)
    {
        initList.push(initList[i-1] + Math.floor(Math.random()*12) - 2);
        i++;
    }

    return initList;
}

export default almostSortedArray;