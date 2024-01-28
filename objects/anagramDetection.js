var isAnagram = function(test, original) {
    test = test.toLowerCase();
    original = original.toLowerCase();

    let sumTest = 0;
    let sumOriginal = 0;
    for(let i = 0; i < test.length; i++){
        sumTest += test.charCodeAt(i)
    }
    for(let i = 0; i < original.length; i++){
        sumOriginal += original.charCodeAt(i)
    }
    return sumTest == sumOriginal
};
