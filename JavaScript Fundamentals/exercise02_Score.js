const dolphinScoreGame1 = 97;
const dolphinScoreGame2 = 112;
const dolphinScoreGame3 = 101;

const dolhpinAverage = (dolphinScoreGame1 + dolphinScoreGame2 + dolphinScoreGame3) / 3;

const koalaScoreGame1 = 109;
const koalaScoreGame2 = 95;
const koalaScoreGame3 = 106;

const koalaAverage = (koalaScoreGame1 + koalaScoreGame2 + koalaScoreGame3) / 3;

if(dolhpinAverage >= 100 && dolhpinAverage > koalaAverage){
    console.log("The Dolphins WIN the championship!")
} else if (dolhpinAverage < 100 || koalaAverage < 100){
    console.log("Minimum score must be 100!")
} else if (dolhpinAverage < koalaAverage && koalaAverage >= 100){
    console.log("The Koalas WIN the championship!")
} else if (dolhpinAverage === koalaAverage){
    console.log("The games result in a DRAW!")
}

