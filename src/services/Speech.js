import {
  randomNumber, calcLengthByPercent, shuffleArray, isCorrectWord,
} from '../lib/util';

function speechSynthesis(word) {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(word);
  utterThis.lang = 'tr-TR';
  synth.speak(utterThis);
}

function SpeechService(names, words) {
  const p = new Promise((resolve) => {
    const newLength = calcLengthByPercent(names);
    const shuffleNames = shuffleArray(names);
    const newNames = shuffleNames.filter((v, k) => (k < newLength && !words.includes(v)));
    const index = randomNumber(newNames);
    let word = newNames[index];
    if (words.length > 0) {
      const humanWord = words[words.length - 1];
      word = newNames.find((name) => isCorrectWord(humanWord, name));
    }
    if (word) speechSynthesis(word);
    resolve(word);
  });
  return p;
}

export default SpeechService;
