export function getRandomThrow() {
    const randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1 ) {
        return 'rock';
    } else if (randomNumber > 1 && randomNumber <=2) {
        return 'paper';
    } else if (randomNumber > 2 && randomNumber <=3) {
        return 'scissors';
    } else {
        console.log(randomNumber);
        getRandomThrow(); //This is the case that zero was generated
    }
}

//Comparison function
export function doesUserWin(player, computer) {
    const userCompString = ['rockrock',
    'rockpaper',
    'rockscissors',
    'paperrock',
    'paperpaper',
    'paperscissors',
    'scissorsrock',
    'scissorspaper',
    'scissorsscissors'];

    const userCompOutcomes = ['DRAW',
    'LOSE',
    'WIN',
    'WIN',
    'DRAW',
    'LOSE',
    'LOSE',
    'WIN',
    'DRAW'];
     
    const combinedString = player + computer;
    console.log(combinedString, userCompString)
    const scenarioPosition = userCompString.indexOf(combinedString, userCompString);
    console.log(userCompString.indexOf(combinedString, userCompString));
    console.log(typeof scenarioPosition)
    return [userCompOutcomes[scenarioPosition], userCompOutcomes, scenarioPosition];
    
}