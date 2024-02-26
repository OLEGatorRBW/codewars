function computeRanks(number, games) {
    let positions = [];
    if(games.length == 0){
      for(let i = 0; i < number; i++){
        positions[i] = 1;
      }
    } else {
    let obj = {};
    let objDiff = {};
    let objGoals = {}
    while(number > 0) {
        obj[number - 1] = 0;
        objDiff[number - 1] = 0;
        objGoals[number - 1] = 0;
        number--;
    }
    for(let i = 0; i < games.length; i++) {
        if(games[i][2] == games[i][3]){
            obj[games[i][0]]++;
            obj[games[i][1]]++;
        } else if(games[i][2] > games[i][3]){
            obj[games[i][0]] += 2
        } else {
            obj[games[i][1]] += 2
        }
        objDiff[games[i][0]] += games[i][2] - games[i][3]
        objDiff[games[i][1]] += games[i][3] - games[i][2]

        objGoals[games[i][0]] += games[i][2];
        objGoals[games[i][1]] += games[i][3];

    }  

    let arr = Object.entries(obj).sort((a, b) => {          
        if(a[1] == b[1]){
            if(objDiff[b[0]] != objDiff[a[0]]){
                return objDiff[b[0]] - objDiff[a[0]]
            } else { 
               
                if(objGoals[b[0]] != objGoals[a[0]]) {
                    console.log(objGoals[b[0], objGoals[a[0]]])
                    return objGoals[b[0]] - objGoals[a[0]]
                } else {
                    return Number(a[0]) - Number(b[0]);   
                }
            }
        }
        return b[1] - a[1]
    })

    let points = -1;
    let prefDiff = -1;
    let prefGoals = -1;
    let rank = 1;
    for(let i = 0; i < arr.length; i++){
      if(arr[i][1] !== points){
          points = arr[i][1];
          rank = i + 1;
          positions[arr[i][0]] = rank;
      } else {
          if(objDiff[arr[i][0]] != prefDiff || objGoals[arr[i][0]] != prefGoals){
              positions[arr[i][0]] = i + 1
          } else if(objDiff[arr[i][0]] == prefDiff && objGoals[arr[i][0]] == prefGoals){
              positions[arr[i][0]] = positions[arr[i - 1][0]]
          }
      }
      prefDiff = objDiff[arr[i][0]]
      prefGoals = objGoals[arr[i][0]]
      rank++;  
  }
}
return positions
}