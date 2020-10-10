import { getRandomThrow, doesUserWin, resetButtonActions } from './functions.js';

const shootButton = document.getElementById('shoot');
const resetButton = document.getElementById('reset');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userPickImage = document.getElementById('user-pick-image');

//Get this in click event listener
shootButton.addEventListener('click', () => {
    //Get value of radio button selected
    const checkedRadioButton = document.querySelector(':checked');
    const userSelection = checkedRadioButton.value;    
    
    //Generate random computer selection
    const compSelection = getRandomThrow();    
    //Compare
    doesUserWin(userSelection, compSelection); //delete variable later
    userPickImage.scrollIntoView({ behavior: 'smooth' });
});

shootButton.addEventListener('mouseover', () => {
    shootButton.style.borderColor = '#564138';
    shootButton.style.backgroundColor = '#F24236';
    shootButton.textContent = 'SHOOT';
    shootButton.style.fontSize = '20pt';
});

shootButton.addEventListener('mouseout', () => {
    shootButton.style.borderColor = '#F24236';
    shootButton.style.backgroundColor = '#564138';
    shootButton.textContent = '3...2...1...';
});

// Hooks for reset button
resetButton.addEventListener('click', () => {
    resetButtonActions();
});

rock.addEventListener('click', () => {
    rock.style.borderColor = '#F24236';
    paper.style.borderColor = 'white';
    scissors.style.borderColor = 'white';
});

paper.addEventListener('click', () => {
    rock.style.borderColor = 'white';
    paper.style.borderColor = '#F24236';
    scissors.style.borderColor = 'white';
});

scissors.addEventListener('click', () => {
    rock.style.borderColor = 'white';
    paper.style.borderColor = 'white';
    scissors.style.borderColor = '#F24236';
});
