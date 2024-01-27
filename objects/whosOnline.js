const whosOnline = (friends) => {
  let res = {online: [], offline: [], away: []}
  let arr =  friends.map((e) => {
    if(e.status == 'online' && e.lastActivity <= 10){
      res.online.push(e.username)
    } else if(e.status == 'online' && e.lastActivity > 10){
      res.away.push(e.username)
    } else {
      res.offline.push(e.username)
    }
  })
  for(let key in res){
    if (res[key].length == 0){
      delete res[key]
    }
  }
  return res
}