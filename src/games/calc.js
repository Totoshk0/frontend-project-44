import { runGame, generateNumber } from '../index.js';

const operators = ['+', '-', '*'];
const getRandomOperator = (oper) => Math.floor(Math.random() * oper.length);
const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const generateQuestionAndResult = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const operator = operators[getRandomOperator(operators)];
  const Quest = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [Quest, correctAnswer];
};

const calcGame = () => {
  const ruleString = 'What is the result of the expression?';

  runGame(ruleString, generateQuestionAndResult);
};

export default calcGame;
