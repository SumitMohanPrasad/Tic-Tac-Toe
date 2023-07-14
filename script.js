
let currentPlayer = 'X';

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];


function move(row, col) {

    if (board[row][col] == '') {
        board[row][col] = currentPlayer;
        document.getElementById('board').children[row * 3 + col].innerHTML = currentPlayer;

        if (checkWin() == true) {
            console.log(currentPlayer, " wins");
            setTimeout(() => {
                alert(currentPlayer + " wins");
                resetBoard();
            }, 0);
            return;
        }

        if (checkTie() == true) {
            console.log("there is a tie");
            setTimeout(() => {
                alert("there is a tie");
                resetBoard();
            }, 0);
            return;
        }
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
        console.log(board);
    }
}

function checkWin() {

    // for row
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == currentPlayer && board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
            return true;
        }
    }

    // for column 
    for (let i = 0; i < 3; i++) {
        if (board[0][i] == currentPlayer && board[1][i] == currentPlayer && board[2][i] == currentPlayer) {
            return true;
        }
    }

    // for dia and anti-dia
    if ((board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer) ||
        (board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer)) {
        return true;
    }
}

function resetBoard() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
    currentPlayer = 'X';
}

// task to show draw case

function checkTie() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                return false;
            }
        }
    }
    return true;
}