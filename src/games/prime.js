import { generateNumber, runGame } from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndResult = () => {
  const number = generateNumber();
  const result = isPrime(number) ? 'yes' : 'no';
  return [number, result];
};

const primeGame = () => {
  const ruleString = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGame(ruleString, generateQuestionAndResult);
};

export default primeGame;
