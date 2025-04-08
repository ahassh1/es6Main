const ages = [23,56,34,65,26,46];
const ages2 = [53,34,32,46,21,48,36];
const number = [35,64,63,53,75,32,86];
const all = ages.concat(ages2).concat([85]) .concat(number);
const totalNum = [...ages,...ages2,...number,85]
console.log(all)
console.log(totalNum)

const palashTk = 3455;
const ahsanTk  = 3667;
const  habibTk  = 5342;
const mdTk = 26432;
const maximum = Math.max(palashTk,habibTk,mdTk)
console.log(maximum)

const tk = [230,20,249]
const  maximum1 = Math.max(...tk)
console.log(maximum1)
