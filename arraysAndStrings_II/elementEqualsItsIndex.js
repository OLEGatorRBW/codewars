function indexEqualsValue(a) {
    let last = a.length - 1;
    let first = 0;
    let res = -1;
    while(first <= last){
        let middle = Math.floor((first + last) / 2); 
        if(middle == a[middle]) {
            res = middle;
            last = middle - 1; 
        } else if(middle > a[middle]){
            first = middle + 1;
        } else {
            last = middle - 1;
        }
    }
    return res;
}
