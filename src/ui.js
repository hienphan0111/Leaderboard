import { getScores, pushScore } from './api.js';
import renderBoard from './scoreBoard.js';

const updateScore = async () => {
  let scores = await getScores();
  renderBoard(scores);

}

const refresh = () => {
  const refreshBtn = document.getElementById('refresh');
  refreshBtn.addEventListener('click', () => {
    updateScore();
  });
}

const submit = () => {
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');
    const input = {
      user: userInput.value,
      score: scoreInput.value,
    }
    pushScore(input);
    updateScore();
    userInput.value = '';
    scoreInput.value = '';
  });
}

export { updateScore, refresh, submit };