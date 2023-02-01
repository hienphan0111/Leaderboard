const renderBoard = (scores) => {
  const boardScore = document.querySelector('.board-score');
  const ul = document.createElement('ul');
  scores.sort((a, b) => { return b.score - a.score });
  scores.forEach((item) => {
    const { user, score } = item;
    const li = document.createElement('li');
    li.innerHTML = `${user}: ${score}`;
    li.classList.add('score-item');
    ul.appendChild(li);
  });
  boardScore.innerHTML = ul.innerHTML;
}

export default renderBoard;