function duplicateEncode(word){
    let obj = {
        a: '(',
        b: ')'
    }
    let str = '';
    word = word.toUpperCase();
    for(let i = 0; i < word.length; i++){
        word.slice(0, i) + word.slice(i + 1).includes(word[i]) ? str += obj.b : str += obj.a
    }
    return str
}
    