import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    return [num1, num2];
}

export const large_comm = () => {
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
            console.log(`Let's try again, ${userName}!`);
            correctAnswers = 0;
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
    return;
};