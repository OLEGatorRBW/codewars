function abbrevName(name){
 return name.split(' ').map(x => x.slice(0, 1).toUpperCase()).join('.')
}
