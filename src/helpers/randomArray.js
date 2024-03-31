const randomArray = (size = 200) => {
    let initList = []
    while(initList.length < size){
      let a = Math.floor(Math.random()*(2*size)) + 1;
      if(initList.indexOf(a) === -1){
        initList.push(a);
      }
    }

    return initList;
}

export default randomArray;