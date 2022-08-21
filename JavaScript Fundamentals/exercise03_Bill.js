//TERNARY OPERATOR age <= 18 ? "This my age" : "This not my age";
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;

console.log(
  `The bill was ${bill}, the tip was ${bill * tip}, the total value is ${
    bill + bill * tip
  }`
);
