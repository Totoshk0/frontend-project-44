import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

const gcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};
const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  return [num1, num2];
};

export default large_comm = () => {
  const userName = greetUser();

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const [num1, num2] = generateQuestion();
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));

    const correctAnswer = gcd(num1, num2);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      correctAnswers = 0;
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
