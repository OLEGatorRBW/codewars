function getObjectDepth(obj) {
    if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
        return 0;
    }

    let maxDepth = 0;
    for(let key of Object.keys(obj)){
        maxDepth = Math.max(maxDepth, getObjectDepth(obj[key]) + 1)
    }
    return maxDepth
}
