function sortArray(array) {
    let filterArraySort = array.filter((e) => {
        return e % 2 != 0
    }).sort((a, b) => (b - a));

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 != 0) {
            array[i] = filterArraySort.pop()
        }
    }

    return array
}
