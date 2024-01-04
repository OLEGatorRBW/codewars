function abbreviate(string) {
    let regExpWords = /[a-zA-Z]+/g;
    return string.replace(regExpWords, function(match){
        return (match.length <= 3) ? match : match[0] + (match.length - 2) + match[match.length - 1]
    })
}
