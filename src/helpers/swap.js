const swap = (list, i, j) => {
    if(i===j)
        return;
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

export default swap;