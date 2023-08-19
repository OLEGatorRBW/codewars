function proofread (str) { 
 let ei = str.replace(/ie/gi, 'ei').toLowerCase().split(/[.!?]\s+/);
 for(let i = 0; i < ei.length; i++) {
  ei[i] = ei[i][0].toUpperCase() + ei[i].slice(1)
 }
  return ei.join('. ')
} 
