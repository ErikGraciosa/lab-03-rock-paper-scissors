// import functions and grab DOM elements
//Spans
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');

//Buttons
const shootButton = document.getElementById('shoot');
const resetButton = document.getElementById('reset');

const userPickImage = document.getElementById('user-pick-image');
const compPickImage = document.getElementById('comp-pick-image');
const toggleWinnerLoser = document.getElementById('toggle-winner-loser');
const numberOfResets = document.getElementById('resets');

// initialize state
const userCompString = ['rockrock',
    'rockpaper',
    'rockscissors',
    'paperrock',
    'paperpaper',
    'paperscissors',
    'scissorsrock',
    'scissorspaper',
    'scissorsscissors'];

const userCompOutcomes = ['draw',
    'lose',
    'win',
    'win',
    'draw',
    'lose',
    'lose',
    'win',
    'draw'];

// set event listeners to update state and DOM
wins.textContent = 0;
losses.textContent = 0;
draws.textContent = 0;

//Function for computer selection, no args, outputs rock, paper, scissors.
function getRandomThrow() {
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
function doesUserWin(player, computer) {
    const combinedString = player + computer;
    const scenarioPosition = userCompString.indexOf(combinedString, userCompString);
    return userCompOutcomes[scenarioPosition];
}

//Get this in click event listener
shootButton.addEventListener('click', () => {
    //Get value of radio button selected
    const checkedRadioButton = document.querySelector(':checked');
    const userSelection = checkedRadioButton.value;
    console.log('User selected' + userSelection);
    
    //Generate random computer selection
    const compSelection = getRandomThrow();
    console.log('Comp selected' + compSelection);

    //Compare
    const outcome = doesUserWin(userSelection, compSelection);

    //Update states, pictures, increment counters
    console.log(outcome);
    toggleWinnerLoser.textContent = outcome;
    if (outcome === (userCompOutcomes[2] || userCompOutcomes[3] || userCompOutcomes[7])) {
        wins.textContent++;
    } else if (outcome === (userCompOutcomes[1] || userCompOutcomes[5] || userCompOutcomes [6])) {
        losses.textContent++;
    } else if (outcome === (userCompOutcomes[0] || userCompOutcomes[4] || userCompOutcomes[8])) {
        draws.textContent++;
    }

    //Update user picture
    if (userSelection === 'rock') {
        userPickImage.src = './assets/rock.jpeg';
    } else if (userSelection === 'paper') {
        userPickImage.src = './assets/paper.jpeg';
    } else { userPickImage.src = './assets/scissors.jpg';
    }
    userPickImage.style.display = 'block';

    //Update computer picture
    if (compSelection === 'rock') {
        compPickImage.src = './assets/rock.jpeg';
    } else if (compSelection === 'paper') {
        compPickImage.src = './assets/paper.jpeg';
    } else { compPickImage.src = './assets/scissors.jpg';
    }
    compPickImage.style.display = 'block';
});

// Hooks for reset button
// resetButton.addEventListener('click', () => {

// });


