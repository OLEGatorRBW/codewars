function findPair(arr1, arr2) {
    let obj = {}, obj2 = {}, res = [];

    for(let i = 0; i < arr1.length; i++){
        if(!obj[i]){
            obj[i] = arr1[i] + arr2[i]
        }
    }

    let entries = Object.entries(obj);
    entries.forEach(([key, value]) => {
        if(!obj2[value]){
            obj2[value] = 1;
        } else {
            obj2[value]++
        }
    })
 
    let max = Math.max(...Object.values(obj2));
    if(max < 2) return []

    let arrCounts = Object.entries(obj2).filter(([key, value]) => {
        return value >= max;
    })

    let maxFirstElement = parseInt(arrCounts[0][0]);
    for(let i = 1; i < arrCounts.length; i++){
        if(parseInt(arrCounts[i][0]) > maxFirstElement) {
            maxFirstElement = parseInt(arrCounts[i][0])
        }
    }
    
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] + arr2[i] == maxFirstElement){
            res.push([arr1[i], arr2[i]])
        }
    }
    return res
}
// let arr1 = [-521,483,435,-399,363,-615,734,387,-78,846,615,-246,144,1030,1014,-375,843,622,225,333,612,-275,-9,103]
// let arr2 = [1273,227,-460,1361,389,1367,-24,575,-607,-155,95,998,566,-320,-272,1127,119,964,737,419,350,-377,719,859] 
// arr1 = [902,698,904,425,24,739,-798,1535,-283,1545,893,276,103,913,-236,83,-19,-180,1050,1215,1598,1975]
// arr2 = [804,1302,1096,-143,277,1261,1080,-287,984,1232,1107,6,827,1087,1484,768,301,1428,198,33,-350,25] 

// console.log(findPair(arr1, arr2))
// console.log(findPair([ 1, 2, 3, 0, 5, -2 ], [ -1, 2, -3, 4, -5, 6 ]))
// console.log(findPair([1,2,3,4,5],[-1,2,-3,4,-5]))
// console.log(findPair([1,2,3,4,5, 3,4],[9,8,0,0,0, 3, 2]))
console.log(findPair([ 1, 2, 3, 4, 5 ], [ 0, 0, 0, 0, 0 ]))
