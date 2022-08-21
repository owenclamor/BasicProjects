const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.95;
const johnMass = 92;

let markBMI = markMass / (markHeight * markHeight);

let johnBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI;

if(markBMI > johnBMI){
    markHigherBMI = true;
    console.log(`Mark's BMI ${markBMI}, is higher than John's ${johnBMI}`);

}else{
    markHigherBMI = false;
    console.log(`John's BMI ${johnBMI}, is higher than Mark's ${markBMI}`);
}

//const markHigherBMI = markBMI > JohnBMI; <-- better way. always returns a boolean

console.log("Mark's BMI is: " + markBMI);
console.log("John's BMI is " + johnBMI);
console.log(markHigherBMI);

