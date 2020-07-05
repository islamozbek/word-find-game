const calcLengthByPercent = (names) => Math.floor((names.length * 70) / 100);

const shuffleArray = (array) => [...array.sort(() => Math.random() - 0.5)];

const randomNumber = (array) => Math.floor(Math.random() * array.length);

const isCorrectWord = (word1, word2) => word1.substr(word1.length - 1) === word2.substr(0, 1);

export {
  calcLengthByPercent,
  shuffleArray,
  randomNumber,
  isCorrectWord,
};
