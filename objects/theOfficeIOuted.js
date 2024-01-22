function outed(meet, boss){
    meet[boss] = meet[boss] * 2;
    let sum = 0;
    let i = 0;
    for(let key in meet){
        sum += meet[key];
        i++;
    }  
    return sum / i > 5 ? 'Nice Work Champ!' : 'Get Out Now!' 
}
