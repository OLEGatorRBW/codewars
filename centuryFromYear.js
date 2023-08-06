function century(year) {
 let res = year % 100;
 return res ? Math.ceil( year / 100 ) : year / 100;
}