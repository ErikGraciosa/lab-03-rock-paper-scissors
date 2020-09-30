

// IMPORT MODULES under test here:
import { example } from '../app.js';

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

//does user win section
test('time to test a function', (expect) => {
    //Arrange
    //checking data type
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});