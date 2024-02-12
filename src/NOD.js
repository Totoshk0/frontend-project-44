const readlineSync = require('readline-sync');
import { greetUser } from './cli.js';

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    return [num1, num2];
}

function main() {
    const userName = greetUser();

    let correctAnswers = 0;

    while (correctAnswers < 3) {
        const [num1, num2] = generateQuestion();
        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = parseInt(readlineSync.question("Your answer: "));

        const correctAnswer = gcd(num1, num2);

        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log("Let's try again, Sam!");
            correctAnswers = 0;
        }
    }

    console.log(`Congratulations, ${userName}!`);
}

main();
