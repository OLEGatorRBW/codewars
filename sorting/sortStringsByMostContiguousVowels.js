
function sortStringsByVowels(strings){
    
    function amountVowels(word){
        let str = 'aeiouAEIOU';
        let count = 0;
        let max = 0;
        for(let i = 0; i < word.length; i++){
            // console.log(word[i])
            if(str.includes(word[i])){
                count++
                if(count > max){
                    max = count;
                }
            } else {
                count = 0
            }
        }
        return max
    }

    return strings.sort((a, b) => {
        let amountA = amountVowels(a);
        let amountB = amountVowels(b);
        if(amountA !== amountB){
            return amountB - amountA
        }
    })    
}
