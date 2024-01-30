function groupAnagrams(words){
    let obj = {};
    for(let i = 0; i < words.length; i++){ 
        let word = words[i].split('').sort().join('');
        if(!obj[word]){
            obj[word] = []
        }
        obj[word].push(words[i])
    }
    return Object.values(obj)
}