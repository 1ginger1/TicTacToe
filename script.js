'use strict'

const field = document.querySelector('.playField'),
      play1 = prompt("Введите имя игрока 1", ''),
      play2 = prompt("Введите имя игрока 2", '');;

// Формирование сетки 
let cells = [];
for (let i = 1; i <= 9; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('data-cell', i);
    cell.classList.add('playField__cell');
    field.append(cell);
    cells.push(cell);
}


// Ходы игроков
let move = 1;
let player1 = [];
let player2 = [];

const combs = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];


function gameOut(player) {
    for(let i = 0; i < combs.length; i++) {
        if (player.includes(combs[i][0]) & player.includes(combs[i][1]) & player.includes(combs[i][2])) {
            return true;
        } 
    }
}


cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        if (move % 2) {
            cells[e.target.getAttribute('data-cell') - 1].textContent = 'X';
            player1.push(+e.target.getAttribute('data-cell'));
            if (player1.length >= 3) {
                if (gameOut(player1)) {
                    alert(`Выиграл игрок ${play1}`);
                    location.reload();
                }
            }
            
        } else if (!(move % 2)) {
            cells[e.target.getAttribute('data-cell') - 1].textContent = 'O';
            player2.push(+e.target.getAttribute('data-cell'));
            if (player2.length >= 3) {
                if (gameOut(player2)) {
                    alert(`Выиграл игрок ${play2}`);
                    location.reload();
                }
            }
        }
        move++;

        if (move == 10) {
            alert(`Ничья !`);
            location.reload();
        }
    }, { once: true });
});






