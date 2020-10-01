import { getRandomThrow, doesUserWin} from './functions.js';

const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');

const shootButton = document.getElementById('shoot');
const resetButton = document.getElementById('reset');

const userPickImage = document.getElementById('user-pick-image');
const compPickImage = document.getElementById('comp-pick-image');
const toggleWinnerLoser = document.getElementById('toggle-winner-loser');
const numberOfResets = document.getElementById('resets');

wins.textContent = 0;
losses.textContent = 0;
draws.textContent = 0;
numberOfResets.textContent = 0;

//Get this in click event listener
shootButton.addEventListener('click', () => {
    //Get value of radio button selected
    const checkedRadioButton = document.querySelector(':checked');
    const userSelection = checkedRadioButton.value;    
    
    //Generate random computer selection
    const compSelection = getRandomThrow();    
    //Compare
    const outcome = doesUserWin(userSelection, compSelection);
    
    //Update states, pictures, increment counters    
    toggleWinnerLoser.textContent = outcome[0];
    toggleWinnerLoser.style.display = 'block';
    if (outcome[0] === (outcome[1][2] || outcome[1][3] || outcome[1][7])) {
        wins.textContent++;
    } else if (outcome[0] === (outcome[1][1] || outcome[1][5] || outcome[1][6])) {
        losses.textContent++;
    } else if (outcome[0] === (outcome[1][0] || outcome[1][4] || outcome[1][8])) {
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
resetButton.addEventListener('click', () => {
    wins.textContent = 0;    
    losses.textContent = 0;
    draws.textContent = 0;
    numberOfResets.textContent++;
});


