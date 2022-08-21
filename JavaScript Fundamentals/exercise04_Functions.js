//Step 1: Arrow Function

const calcAverage = (score1, score2, score3) => {
    average = (score1 + score2 + score3) / 3;
    return average
}

let dolphinScore = calcAverage(44, 23, 71);
let koalaScore = calcAverage(65, 54, 49);


//Step 2: Function 
const checkWinner = function(avgDolphins, avgKoalas){
    if (avgDolphins >= (avgKoalas * 2)){
        console.log(`Dolphins win with a score of ${avgDolphins} vs Koala's ${avgKoalas}`);
    }else if (avgKoalas >= (avgDolphins *2)){
        console.log(`Koalas win with a score of ${avgKoalas} vs Dolphin's ${avgDolphins}`);
    }else{
        console.log(`No team has won the competition`)
    }
}

checkWinner(576, 111);

//Test 2

dolphinScore = calcAverage(85, 54, 41);
koalaScore = calcAverage(23, 34, 27);
checkWinner(dolphinScore, koalaScore);