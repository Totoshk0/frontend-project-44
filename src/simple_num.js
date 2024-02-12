#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};


export const playPrimeGame = () => {
    const userName = greetUser();

    let correctAnswers = 0;
    const roundsToWin = 3;
    console.log(`Answer "yes" if given number is prime.Otherwise answer "no".`);
    while (correctAnswers < roundsToWin) {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

        const isNumberPrime = isPrime(number);
        const correctAnswer = isNumberPrime ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswers += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}! You won!`);
};