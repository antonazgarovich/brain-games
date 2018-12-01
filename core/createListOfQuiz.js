const getValue = func => func();
const createFilledArray = (size, func) => Array.from(Array(size), () => func());

const createQuiz = ({ question, solution }) => ({ question, solution });

export const isRightAnswer = (quiz, answer) => quiz.solution === answer;

export const createListOfQuiz = (generatorQuiz, attempts) => createFilledArray(attempts, () => createQuiz(getValue(generatorQuiz)));
