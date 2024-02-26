import readlineSync from 'readline-sync';

export const generateNumber = (start = 1, end = 20) => {
  const result = Math.floor(Math.random() * (end + 1 - start)) + start;
  return result;
};

export const runGame = (ruleString, generateQuestionAndResult) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(ruleString);
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const [question, result] = generateQuestionAndResult();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === result) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
