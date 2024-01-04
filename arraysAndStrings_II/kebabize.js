function kebabize(str) {
    let regExpNumber = /\d+/g;
    let regExp = /[a-zA-Z]/;
    let regExpG = /[A-Z]/g;

    let strWithoutNumbers = str.replace(regExpNumber, '');

    let newStr = strWithoutNumbers.replace(regExp, function(match){
        return match.toLowerCase()
    })

    return newStr.replace(regExpG, function(match){
        return '-' +  match.toLowerCase()
    })
}

