

// IMPORT MODULES under test here:
import { getRandomThrow, doesUserWin } from '../functions.js';

const test = QUnit.test;


test('Test getRandomThrow by confirming output datatype, expected to be "string"', (expect) => {
    //Arrange
    //checking data type
    // Set up your arguments and expectations
    const expected = 'string';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = typeof(getRandomThrow());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});

test('test doesUserWin(player, computer) input and outputs align with game rules R>S, P>R, S>P, like=like(draw)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //Is it ok to use arrays in testing?
    const player1 = 'rock';
    const player2 = 'rock';
    const player3 = 'rock';
    const player4 = 'paper';
    const player5 = 'paper';
    const player6 = 'paper';
    const player7 = 'scissors';
    const player8 = 'scissors';
    const player9 = 'scissors';
    
    const computer1 = 'rock';
    const computer2 = 'paper';
    const computer3 = 'scissors';
    const computer4 = 'rock';
    const computer5 = 'paper';
    const computer6 = 'scissors';
    const computer7 = 'rock';
    const computer8 = 'paper';
    const computer9 = 'scissors';

    const expected1 = 'draw';
    const expected2 = 'lose';
    const expected3 = 'win';
    const expected4 = 'win';
    const expected5 = 'draw';
    const expected6 = 'lose';
    const expected7 = 'lose';
    const expected8 = 'win';
    const expected9 = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = doesUserWin(player1, computer1);
    const actual2 = doesUserWin(player2, computer2);
    const actual3 = doesUserWin(player3, computer3);
    const actual4 = doesUserWin(player4, computer4);
    const actual5 = doesUserWin(player5, computer5);
    const actual6 = doesUserWin(player6, computer6);
    const actual7 = doesUserWin(player7, computer7);
    const actual8 = doesUserWin(player8, computer8);
    const actual9 = doesUserWin(player9, computer9);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
    expect.equal(actual4, expected4);
    expect.equal(actual5, expected5);
    expect.equal(actual6, expected6);
    expect.equal(actual7, expected7);
    expect.equal(actual8, expected8);
    expect.equal(actual9, expected9);
});