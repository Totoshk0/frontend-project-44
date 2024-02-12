import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

export const getRandomInt = (min, max) => {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

export const runGame = (description, generateQuestion) => {
    const userName = greetUser();

    const roundsCount = 3;
    let correctAnswersCount = 0;

    for (let i = 0; i < roundsCount; i += 1) {
        const [question, correctAnswer] = generateQuestion();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};
