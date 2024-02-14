import { generateNumber, runGame } from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateQuestionAndResult = () => {
  const number = generateNumber();
  const result = isEven(number) ? 'yes' : 'no';
  return [number, result];
};

const evenGame = () => {
  const ruleString = "Answer 'yes' if the number is even, otherwise answer 'no'.";

  runGame(ruleString, generateQuestionAndResult);
};

export default evenGame;
