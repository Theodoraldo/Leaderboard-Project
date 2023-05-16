import './style.css';
import scores from './module/database.js';

const container = document.querySelector('.container');

const displayScore = () => {
  container.innerHTML = '';
  for (let i = 0; i < scores.length; i += 1) {
    container.innerHTML += `
    <li class='${scores[i].id % 2 ? 'odd' : 'even'}'>${scores[i].name} : ${scores[i].score}</li>
    </ul>
    `;
  }
};

displayScore();
