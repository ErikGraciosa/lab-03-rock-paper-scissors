
const userPickImage = document.getElementById('user-pick-image');
const compPickImage = document.getElementById('comp-pick-image');
const toggleWinnerLoser = document.getElementById('toggle-winner-loser');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');
const numberOfResets = document.getElementById('resets');
const captionComputer = document.getElementById('caption-computer');
const captionYou = document.getElementById('caption-you');
const vs = document.getElementById('vs');

wins.textContent = 0;
losses.textContent = 0;
draws.textContent = 0;
numberOfResets.textContent = 0;


//Generates random rock, paper, scissors
export function getRandomThrow() {
    const randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
        return 'rock';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'paper';
    } else if (randomNumber > 2 && randomNumber <= 3) {
        return 'scissors';
    } else {
        getRandomThrow(); //This is the case that zero was generated
    }
}

//Comparison function
export function doesUserWin(player, computer) {
    const userCompArray = ['rockrock',
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
    const scenarioPosition = userCompArray.indexOf(combinedString, userCompArray);

    //Update states, pictures, increment counters    
    toggleWinnerLoser.textContent = userCompOutcomes[scenarioPosition];

    toggleWinnerLoser.style.display = 'block';
    if (userCompOutcomes[scenarioPosition] === 'WIN') {
        wins.textContent++;
    } else if (userCompOutcomes[scenarioPosition] === 'LOSE') {
        losses.textContent++;
    } else if (userCompOutcomes[scenarioPosition] === 'DRAW') {
        draws.textContent++;
    }

    //Display matchup 
    vs.style.display = 'block';
    captionComputer.style.display = 'block';
    captionYou.style.display = 'block';

    //Update user picture
    if (player === 'rock') {
        userPickImage.src = './assets/rock.jpeg';
    } else if (player === 'paper') {
        userPickImage.src = './assets/paper.jpeg';
    } else { userPickImage.src = './assets/scissors.jpg';
    }
    userPickImage.style.display = 'block';

    //Update computer picture
    if (computer === 'rock') {
        compPickImage.src = './assets/rock.jpeg';
    } else if (computer === 'paper') {
        compPickImage.src = './assets/paper.jpeg';
    } else { compPickImage.src = './assets/scissors.jpg';
    }
    compPickImage.style.display = 'block';

    return userCompOutcomes[scenarioPosition];
}

export function resetButtonActions() {
    wins.textContent = 0;    
    losses.textContent = 0;
    draws.textContent = 0;
    numberOfResets.textContent++;
}