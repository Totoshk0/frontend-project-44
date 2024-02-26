import { generateNumber, runGame } from '../index.js';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateQuestionAndResult = () => {
  const randomNumber1 = Math.floor(generateNumber());
  const randomNumber2 = Math.floor(generateNumber());
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = gcd(randomNumber1, randomNumber2).toString();
  return [question, correctAnswer];
};

const gcdGame = () => {
  const ruleString = 'Find the greatest common divisor of given numbers.';

  runGame(ruleString, generateQuestionAndResult);
};

export default gcdGame;
