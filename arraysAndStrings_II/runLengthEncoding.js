var runLengthEncoding = function(str){
    let counter = 1;
    let arr = [];

    for(let i = 0; i < str.length; i++){
        if(str[i + 1] == str[i]){
            counter++
        } else {
            arr.push([counter, str[i]]);
            counter = 1;
        }
    }
    return arr;
}
