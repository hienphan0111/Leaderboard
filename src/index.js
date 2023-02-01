import "./style.css";
import { renderBoard } from './scoreBoard.js';

const scores = [
  {
    name: 'one',
    score: 100,
  },
  {
    name: 'two',
    score: 80,
  },
  {
    name: 'three',
    score: 60,
  },
];

renderBoard(scores);
