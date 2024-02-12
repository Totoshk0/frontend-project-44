#!/usr/bin/env node
import { getRandomInt, runGame } from '../src/progression.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + step * i);
    }
    return progression;
};

const generateQuestion = () => {
    const start = getRandomInt(1, 20);
    const step = getRandomInt(1, 10);
    const length = getRandomInt(5, 10);
    const progression = generateProgression(start, step, length);
    const hiddenIndex = getRandomInt(0, length - 1);
    const answer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    return [question, answer];
};

const playProgressionGame = () => {
    runGame(description, generateQuestion);
};

export default playProgressionGame;

playProgressionGame();