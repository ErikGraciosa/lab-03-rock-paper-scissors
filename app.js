import { getRandomThrow, doesUserWin, resetButtonActions } from './functions.js';

const shootButton = document.getElementById('shoot');
const resetButton = document.getElementById('reset');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//Get this in click event listener
shootButton.addEventListener('click', () => {
    //Get value of radio button selected
    const checkedRadioButton = document.querySelector(':checked');
    const userSelection = checkedRadioButton.value;    
    
    //Generate random computer selection
    const compSelection = getRandomThrow();    
    //Compare
    doesUserWin(userSelection, compSelection); //delete variable later
});

// Hooks for reset button
resetButton.addEventListener('click', () => {
    resetButtonActions();
});

rock.addEventListener('click', () => {
    rock.style.borderColor = 'purple';
    paper.style.borderColor = '';
    scissors.style.borderColor = '';
});

paper.addEventListener('click', () => {
    rock.style.borderColor = '';
    paper.style.borderColor = 'purple';
    scissors.style.borderColor = '';
});

scissors.addEventListener('click', () => {
    rock.style.borderColor = '';
    paper.style.borderColor = '';
    scissors.style.borderColor = 'purple';
});
