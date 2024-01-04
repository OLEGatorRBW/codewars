function zeroPlentiful(arr){
    let count = 0;
    let n = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0) {
            // console.log(arr[i])
            count++;
        } else {
            if(count > 0 && count < 4){
                return 0;
            } else if (count >= 4) {
                n++;
            }
            count = 0;
        }
    }
    if(count > 0 && count < 4){
        return 0;
    } else if (count >= 4){
        n++;    
    }
    return n;
}
console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0]))