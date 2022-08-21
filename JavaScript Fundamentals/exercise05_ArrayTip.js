
//calcTip Function
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 
        ? bill * 0.15 : bill * 0.2;
}

//create array 'bills'
const bills = new Array(125, 555, 44);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);
