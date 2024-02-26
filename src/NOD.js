import { generateNumber, runGame } from '../src/index.js';

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

const [num1, num2] = generateNumber();
console.log(`Question: ${num1} ${num2}`);

const generateQuestionAndResult = () => {
  const number = generateNumber();
  const result = gcd(num1, num2) ? 'yes' : 'no';
  return [number, result];
};

const nodGame = () => {
  const ruleString = "Answer 'yes' if the number is even, otherwise answer 'no'.";

  runGame(ruleString, generateQuestionAndResult);
};

export default nodGame;
