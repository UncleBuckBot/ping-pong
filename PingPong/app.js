const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const reset = document.querySelector('#reset');
const playSelector = document.querySelector('#playto');

let winScore = playSelector.value;
let isGameOver = false;

let p1Score = 0;
p1Btn.addEventListener('click', function () {
    if (isGameOver == false && p1Score < winScore) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        if (p1Score == winScore) {
            isGameOver = true;
            p1Btn.setAttribute('disabled', true);
            p2Btn.setAttribute('disabled', true);
            p1Display.classList.add('win');
            p2Display.classList.add('lose');
        }
    }
})

let p2Score = 0;
p2Btn.addEventListener('click', function () {
    if (isGameOver == false && p2Score < winScore) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        if (p2Score == winScore) {
            isGameOver = true;
            p1Btn.setAttribute('disabled', true);
            p2Btn.setAttribute('disabled', true);
            p1Display.classList.add('lose');
            p2Display.classList.add('win');
        }
    }
})

reset.addEventListener('click', function () {
    resetAll();
})


const resetAll = () => {
    p1Score = 0;
    p1Display.textContent = p1Score;
    p2Score = 0;
    p2Display.textContent = p2Score;
    isGameOver = false;
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
    p1Display.classList.remove('win', 'lose');
    p2Display.classList.remove('win', 'lose');
    winScore = playSelector.value[0];
}

playSelector.addEventListener('input', () => {
    resetAll();
    winScore = playSelector.value;
})