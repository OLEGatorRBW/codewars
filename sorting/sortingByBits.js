function sortByBit(arr) {
    function amountDigitOne(num){
        let count = 0;
        while(num != 0){
            count += num % 2;
            num = Math.floor(num / 2)
        }
        return count
    }

    return arr.sort((a, b) => {
        let amountBitsA = amountDigitOne(a);
        let amountBitsB = amountDigitOne(b);
        if(amountBitsA == amountBitsB){
            return a - b
        } else {
            return amountBitsA - amountBitsB
        }
    })
}