const renderBoard = (scores) => {
  const boardScore = document.querySelector('.board-score');
  const ul = document.createElement('ul');
  scores.forEach((item) => {
    const { name, score } = item;
    const li = document.createElement('li');
    li.innerHTML = `${name}: ${score}`;
    li.classList.add('score-item');
    ul.appendChild(li);
  });
  boardScore.appendChild(ul);
}

export { renderBoard };