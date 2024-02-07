import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

export const calc = () => {

    const userName = greetUser();

    let correctAnswersCount = 0;
    console.log('What is the result of the expression ?');
    while (correctAnswersCount < 3) {
        const generateExpression = () => {

            const num1 = Math.floor(Math.random() * 100) + 1;
            const num2 = Math.floor(Math.random() * 100) + 1;
            const operators = ['+', '-', '*'];
            const operator = operators[Math.floor(Math.random() * operators.length)];
            const expression = `${num1} ${operator} ${num2}`;
            return expression;
        };
        const resultExpression = (expression) => {
            return eval(expression);
        };
        const str = generateExpression()

        console.log(`Question: ${str}`);

        const userAnwser = readlineSync.question('Your answer: ');

        if (Number(userAnwser) === resultExpression(str)) {
            console.log("Correct!");
            correctAnswersCount++;
        } else {
            console.log(`'${userAnwser}' is wrong answer ;(. Correct answer was '${resultExpression(str)}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};