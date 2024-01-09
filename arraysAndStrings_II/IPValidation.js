function isValidIP(str) {
    if(!str) return false;
    let arr = str.split('.');
    let regExp = /^(?!0\d+|25[6-9]|2[6-9]\d|[3-9]\d\d)\d{1,3}$/;    

    if(arr.length != 4) return false;

    return arr.every((e) => {
        return regExp.test(e) 
    })
}
