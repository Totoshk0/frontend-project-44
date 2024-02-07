import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

const isEven = (number) => {
    return number % 2 === 0;
};

export const randomNum = () => {

    const userName = greetUser();

    console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

    let correctAnswersCount = 0;
    while (correctAnswersCount < 3) {
        const questionNumber = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

        console.log(`Question: ${questionNumber}`);
        const userAnswer = readlineSync.question("Your answer: ");

        if (userAnswer.toLowerCase() === correctAnswer) {
            console.log("Correct!");
            correctAnswersCount++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};