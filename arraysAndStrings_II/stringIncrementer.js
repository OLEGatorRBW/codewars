function incrementString (strng) {
    let regExp = /\d+$/;
    if(regExp.test(strng)){
        let digits = strng.match(regExp);
        let num = +digits[0];
        let endStr = (num + 1).toString().padStart(digits[0].length, '0');

        return strng.replace(regExp, endStr)
    } else {
        return strng + "1"
    }
}
