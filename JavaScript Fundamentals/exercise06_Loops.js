//calctip Funciton
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const findNeedle = function () {};

//Create bills array
const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//Create empty arrays for tips and totals
const tipArray = [];
const totalsArray = [];

for (let i = 0; i < billsArray.length; i++) {
  const tip = calcTip(billsArray[i]); //every iteration a new tip is created that is why const is used
  tipArray.push(tip);
  totalsArray.push(tip + billsArray[i]);
}
console.log(billsArray, tipArray, totalsArray);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
};
calcAverage([2, 3, 6]); //test case
